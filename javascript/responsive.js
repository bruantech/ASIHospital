var menuButton = document.getElementById("menuButton");
var mainMenus = document.getElementById("mainMenus");
menuButton.onclick = () => {
  mainMenus.classList.toggle("hidden");
};
