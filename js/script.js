// grabing icons and nav 
const icon = document.getElementsByClassName("icon")[0];
const nav = document.getElementsByTagName("ul")[0];

icon.addEventListener("click", function () {
  nav.classList.toggle("active");
  icon.classList.toggle("active");
});
