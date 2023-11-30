let menuIcon = document.querySelector(".menu-button");
let sidebar = document.querySelector(".sidebar");
let body = document.querySelector("body");

let profileIcon = document.querySelector(".user-button")
let userMenu = document.querySelector(".user-menu")

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