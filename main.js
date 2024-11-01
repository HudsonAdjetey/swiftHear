const searchBarIcon = document.querySelector(".search_dskBtn");
const searchText = document.querySelector(".search_dsk");
const searchBar = document.querySelector(".search_bar");
const menuBar = document.querySelector(".bar_icon i");
const navBar = document.querySelector(".nav_mb");
const closeIcon = document.querySelector(".icon-holder .icon-x");
const listIcons = document.querySelectorAll(".nav_mbList li");

// Toggle search bar animation
searchBarIcon.addEventListener("click", function () {
  searchText.classList.toggle("activeSearch");

  if (searchText.classList.contains("activeSearch")) {
    searchText.style.transform = "scaleX(1)";
  } else {
    searchText.style.transform = "scaleX(0)"; // Reset scale when inactive
  }
});

// Toggle navigation menu
menuBar.addEventListener("click", function () {
  navBar.classList.toggle("active");
  document.body.style.overflowY = navBar.classList.contains("active")
    ? "hidden"
    : "auto";
});

// Close navigation menu
closeIcon.addEventListener("click", function () {
  navBar.classList.remove("active");
  document.body.style.overflowY = "auto";
});

// Close navigation on list item click
listIcons.forEach((list) => {
  list.addEventListener("click", function () {
    navBar.classList.remove("active");
    document.body.style.overflowY = "auto";
  });
});
