function showTab(tabName) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');

  const activeTab = document.querySelector(`[onclick="showTab('${tabName}')"]`);
  activeTab.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
  showTab('new-arrivals');
});
