const tabs = document.querySelectorAll(".team-tab");
const playersSection = document.getElementById("players-section");
const managementSection = document.getElementById("management-section");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((button) => button.classList.remove("active"));
    tab.classList.add("active");

    const selectedTab = tab.dataset.tab;

    if (selectedTab === "players") {
      playersSection.style.display = "block";
      managementSection.style.display = "none";
    }

    if (selectedTab === "management") {
      playersSection.style.display = "none";
      managementSection.style.display = "block";
    }
  });
});
