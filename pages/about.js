const tabsContainer = document.querySelector('.tabs-container');
const tabsList = document.querySelector('.tabs-list');
const tabsButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-content');
const tabContentWrapper = document.querySelector('.tabs-content-wrapper');

tabsButtons.forEach((tab, index) => {
  if (index === 0) {
    tab.classList.add('active');
  } else {
    tabPanels[index].classList.add('hidden');
  }
});

tabsContainer.addEventListener('click', (e) => {
  const clickedTab = e.target.closest('a');
  // clickedTab.classList.add('active');
  if (!clickedTab) return;
  e.preventDefault();

  switchTab(clickedTab);
});

function switchTab(newTab) {
  // newTab.classList.add('active');
  const activePanelId = newTab.getAttribute('href');
  const activePanel = tabsContainer.querySelector(activePanelId);

  tabsButtons.forEach((button, index) => {
    button.classList.remove('active');
    button[index] = -1;
  });

  tabPanels.forEach((panel) => {
    panel.classList.add('hidden');
  });

  activePanel.classList.remove('hidden');
  newTab.classList.add('active');
}
