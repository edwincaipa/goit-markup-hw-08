let toggleBtn = document.getElementById('btn-toggle')
let navBar = document.getElementById('navbar-menu');
let btnImg = document.getElementById('btn-img')

toggleBtn.addEventListener('click', () => {
  navBar.classList.toggle('nav--show')
  if (btnImg.href.baseVal === "images/SVG/icons.svg#Menu") {
    btnImg.href.baseVal = "images/SVG/icons.svg#Cerrar";
  } else {
    btnImg.href.baseVal = "images/SVG/icons.svg#Menu"
  }
})