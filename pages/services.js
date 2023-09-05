///////////////////////////////////////////////////////
// ACCORDION
//////////////////////////////////////////////////////
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    let accordionBtn = accordion.querySelector('button');
    accordion.classList.toggle('active');
    if (accordionBtn.textContent === '+') {
      accordionBtn.textContent = '-';
    } else {
      accordionBtn.textContent = '+';
    }
  });
});

///////////////////////////////////////////////////////
// CAROUSEL
//////////////////////////////////////////////////////

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
// const slides = track.children;
// const slides = document.querySelectorAll('.carousel__slide');

const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

//arange the slides next to one another
//solution 1:
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

//solution 2:
// slides.forEach((slide, index) => {
//   slide.style.left = slideWidth * index + 'px';
// });

//solution 3:
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

//DRY - modeToSlide function used in the prevButton function and in the nextButton function
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
};

//when i click left, move slides to the right
prevButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});
//when i click right, move slides to the left
nextButton.addEventListener('click', () => {
  //find the current slide
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  //move to the next slide
  // const amountToMove = nextSlide.style.left;
  // console.log(amountToMove);
  // // track.style.transform = 'translateX(' + amountToMove + ')';
  // track.style.transform = `translateX(-${amountToMove})`;
  // currentSlide.classList.remove('current-slide');
  // nextSlide.classList.add('current-slide');
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});
//when I click the nav indicators, move to that slide

dotsNav.addEventListener('click', (e) => {
  //what indicator was clicked on?
  const targetDot = e.target.closest('button');
  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);

  // currentDot.classList.remove('current-slide');
  // targetDot.classList.add('current-slide');
  updateDots(currentDot, targetDot);

  //hideShowArrows
  // if (targetIndex === 0) {
  //   prevButton.classList.add('is-hidden');
  //   nextButton.classList.remove('is-hidden');
  // } else if (targetIndex === slides.length - 1) {
  //   prevButton.classList.remove('is-hidden');
  //   nextButton.classList.add('is-hidden');
  // } else {
  //   prevButton.classList.remove('is-hidden');
  //   nextButton.classList.remove('is-hidden');
  // }
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});
