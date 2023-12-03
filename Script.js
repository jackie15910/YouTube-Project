let menuIcon = document.querySelector(".menu-button");
let sidebar = document.querySelector(".sidebar");
let body = document.querySelector("body");

let profileIcon = document.querySelector(".user-button")
let userMenu = document.querySelector(".user-menu")

let headerlink = document.querySelector(".header-link");
let currentTheme = document.querySelector(".Light-Dark-mode");
let appearanceMenu = document.querySelector(".appearance-menu");

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




currentTheme.onclick = function(){
  appearanceMenu.classList.toggle("show-appearancemenu")
}

// document.addEventListener('DOMContentLoaded', function() {
//   // This event listener ensures that the JavaScript code runs after the DOM has fully loaded.

//   const appearanceToggle = document.getElementById('appearanceToggle');
//   // Get the element with the ID 'appearanceToggle', which is the container for the dark mode toggle.

//   const body = document.body;
//   // Get the body element of the document.

//   appearanceToggle.addEventListener('click', function() {
//       // Add a click event listener to the 'appearanceToggle' element. This function will be executed when the element is clicked.

//       // Toggle the 'dark-mode' class on the body
//       body.classList.toggle('dark-mode');
//       // Toggle the presence of the 'dark-mode' class on the body element. If the class is present, it will be removed; if it's not present, it will be added.

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