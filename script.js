function switchTab(event, tabId) {
  let tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => button.classList.remove('active'));

  event.target.classList.add('active');

  let tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
}
