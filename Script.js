let menuIcon = document.querySelector(".menu-button");
let sidebar = document.querySelector(".sidebar");
let body = document.querySelector("body");

let profileIcon = document.querySelector(".user-button")
let userMenu = document.querySelector(".user-menu")

menuIcon.onclick = function(){
  sidebar.classList.toggle("small-sidebar");
  body.classList.toggle("shift-body");
}

profileIcon.onclick = function(){
  userMenu.classList.toggle("show-usermenu");
}