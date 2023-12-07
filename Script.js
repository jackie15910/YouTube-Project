let menuIcon = document.querySelector(".menu-button");
let sidebar = document.querySelector(".sidebar");
let body = document.querySelector("body");

let profileIcon = document.querySelector(".user-button")
let userMenu = document.querySelector(".user-menu")

let userInfo = document.querySelector(".user-info");

let headerlink = document.querySelectorAll(".header-link");
let currentTheme = document.querySelector(".show-appearance-menu");
let appearanceMenu = document.querySelector(".appearance-menu");

let themeOptionContainers = document.querySelectorAll('.option-container');
body.classList.add('light-theme');

menuIcon.onclick = function(){ //Shrinks the sidebar
  sidebar.classList.toggle("small-sidebar");
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

themeOptionContainers.forEach(option => {
  option.addEventListener('click', function () {
      // Check if the clicked option is not already selected
      if (!option.classList.contains('selected')) {
          // Remove 'selected' class from all options
          themeOptionContainers.forEach(otherOption => {
              otherOption.classList.remove('selected');
          });

          // Apply the 'selected' class to the clicked option
          option.classList.add('selected');

          // Apply the theme based on the clicked option
          if (option.id === 'darkThemeOption') {
              body.classList.remove('light-theme');
              body.classList.add('dark-theme');
          } else if (option.id === 'lightThemeOption') {
              body.classList.remove('dark-theme');
              body.classList.add('light-theme');
          }
      }
  });
});