let menuIcon = document.querySelector(".menu-button");
let sidebar = document.querySelector(".sidebar");
let body = document.querySelector("body");

menuIcon.onclick = function(){
  sidebar.classList.toggle("small-sidebar");
  body.classList.toggle("shift-body");
}