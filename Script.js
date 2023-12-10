let menuIcon = document.querySelector(".menu-button");
let sidebar = document.querySelector(".sidebar");
let sidebarLinks = document.querySelectorAll(".sidebar-link");
let body = document.querySelector("body");
let icon = document.querySelectorAll(".icon");

let profileIcon = document.querySelector(".user-button");
let userMenu = document.querySelector(".user-menu");

let header = document.querySelector(".header");
let searchbar = document.querySelector(".search-bar");
let userInfo = document.querySelector(".user-info");
let headerlink = document.querySelectorAll(".header-link");
let currentTheme = document.querySelector(".show-appearance-menu");
let appearanceMenu = document.querySelector(".appearance-menu");
let searchButton = document.querySelector(".search-button");
let voiceButton = document.querySelector(".voice-button");

let themeOptionContainers = document.querySelectorAll('.option-container');

menuIcon.onclick = function(){ //Shrinks the sidebar
  sidebar.classList.toggle("small-sidebar");
  sidebarLinks.forEach(link => link.classList.toggle("small-sidebar-link"));
  body.classList.toggle("shift-body");
}

profileIcon.onclick = function(){ //Shows the menu on profile picture click
  userMenu.classList.toggle("show-usermenu");
}

function searchYouTube() { //Converts the search input to useable http address and searches
  const searchInput = document.querySelector(".search-bar");
  const searchTerm = searchInput.value.trim().replace(/ /g, '+');

  if (searchTerm !== '') {
    const searchURL = `https://www.youtube.com/results?search_query=${searchTerm}`;
    window.location.href = searchURL;
  }
}

document.querySelector(".search-bar").addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      searchYouTube();
  }
});

currentTheme.onclick = function () {
  const headerLinks = document.querySelectorAll(".header-link");
  headerLinks.forEach(link => link.classList.toggle("hide-headerlinks"));
  appearanceMenu.classList.toggle("show-appearancemenu");
  userInfo.classList.toggle("hide-userinfo");
};

function iconDarkMode() {
  icon.forEach(iconElement => {
    iconElement.classList.toggle("icon-darkmode");
  });
}

themeOptionContainers.forEach(option => {
  option.addEventListener("click", function () {
      // Check if the clicked option is not already selected
      if (!option.classList.contains("selected")) {
          // Remove 'selected' class from all options
          themeOptionContainers.forEach(otherOption => {
              otherOption.classList.remove("selected");
          });

          // Apply the 'selected' class to the clicked option
          option.classList.add("selected");

          // Apply the theme based on the clicked option
          if (option.id === "darkThemeOption") {
              body.classList.add("dark-theme");
              sidebar.classList.add("sidebar-darkmode");
              header.classList.add("header-darkmode");
              searchbar.classList.add("searchbar-darkmode");
              userMenu.classList.add("usermenu-darkmode");
              menuIcon.classList.add("menu-darkmode"); //temporary
              searchButton.classList.add("searchButton-darkmode")
              voiceButton.classList.add("voice-darkmode")
              iconDarkMode();
          } else if (option.id === "lightThemeOption") {
              body.classList.remove("dark-theme");
              // body.classList.add("light-theme");
              sidebar.classList.remove("sidebar-darkmode");
              header.classList.remove("header-darkmode");
              searchbar.classList.remove("searchbar-darkmode");
              userMenu.classList.remove("header-darkmode");
              menuIcon.classList.remove("menu-darkmode"); //temporary
              searchButton.classList.remove("searchButton-darkmode")
              iconDarkMode();
          }
      }
  });
});