let menuIcon = document.querySelector(".menu-button");
let sidebar = document.querySelector(".sidebar");
let body = document.querySelector("body");

let profileIcon = document.querySelector(".user-button")
let userMenu = document.querySelector(".user-menu")

let userInfo = document.querySelector(".user-info");

let headerlink = document.querySelectorAll(".header-link");
let currentTheme = document.querySelector(".show-appearance-menu");
let appearanceMenu = document.querySelector(".appearance-menu");

let themeOption = document.querySelectorAll('.theme-option');
let darkMode = document

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

themeOption.forEach(container => {
  const theme = container.getAttribute('choose-theme');

  container.addEventListener('click', () => {
    if (theme === 'dark') {
      body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
  });
});

//       // Change the appearance text
//       const appearanceText = document.querySelector('#appearanceToggle p');
//       // Get the <p> element inside the 'appearanceToggle' container.

//       if (body.classList.contains('dark-mode')) {
//           // Check if the 'dark-mode' class is present on the body.
//           appearanceText.textContent = 'Appearance: Dark';
//           // If the dark mode is active, change the text content to 'Appearance: Dark'.
//       } else {
//           appearanceText.textContent = 'Appearance: Light';
//           // If the dark mode is not active, change the text content to 'Appearance: Light'.
//       }
//   });
// });