function showTab(tabName) {
  let contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.classList.remove('active');
  });

  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  document.getElementById(tabName).classList.add('active');

  let activeTab = Array.from(tabs).find(tab => tab.textContent.toLowerCase() === tabName.replace('-', ' '));
  activeTab.classList.add('active');
}
