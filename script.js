document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  function showTab(tabId) {
    tabContents.forEach(content => {
      content.classList.remove("active");
    });

    tabs.forEach(tab => {
      tab.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("active");
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add("active");
  }

  // Attach click event
  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      const tabId = this.getAttribute("onclick").match(/showTab'(.+)'/)[1];
      showTab(tabId);
    });
  });

  // Set default active tab
  showTab("shop");
});
