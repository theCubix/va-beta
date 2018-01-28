//declare variables
var scrollPosition = 0
var screenWidth = 0
var nav = document.getElementById('appNavigation')
var bgImage = document.getElementById('appLandingPageBackgroundImage')
var navList = document.getElementById('appNavList')
var navMenu = document.getElementById('appNavMenuButton')
var navMenuClose = document.getElementById('appNavMenuCloseButton')
var showLinksI = 0
var navListLinks = navList.querySelectorAll('li')

navMenu.addEventListener('click', showNavList)
navMenuClose.addEventListener('click', hideNavList)

function showNavList() {
  document.getElementsByTagName('body')[0].classList.add('lock-scroll')
  nav.classList.add('navigation--elapsed')
  navList.classList.add('navlist--elapsed')
  navMenu.classList.remove('navigation__link--visible')
  navMenuClose.classList.add('navigation__link--visible')
  setTimeout(showLinks(), 500)
}

function showLinks() {
  setTimeout(function () {
    var link = navListLinks[showLinksI]
    link.classList.add('navlist__item--visible')
    showLinksI++;
    if (showLinksI < navListLinks.length) {
      showLinks();
    }
  }, 100)
}

function hideNavList() {
  nav.classList.remove('navigation--elapsed')
  navList.classList.remove('navlist--elapsed')
  navMenu.classList.add('navigation__link--visible')
  navMenuClose.classList.remove('navigation__link--visible')
  for (let index = 0; index < navListLinks.length; index++) {
    const link = navListLinks[index];
    link.classList.remove('navlist__item--visible')
  }
  document.getElementsByTagName('body')[0].classList.remove('lock-scroll')
  showLinksI = 0
}

//maybe for later useful
window.addEventListener('resize', autoHideNavList)

function autoHideNavList() {
  screenWidth = window.innerWidth || document.documentElement.clientWidth || document.documentElement.getElementsByTagName('body')[0]
  if (screenWidth >= 768 && navList.classList.contains('navlist--elapsed') ) {
    navList.classList.remove('navlist--elapsed')
  }
}

//fire 'scroll' function on scroll
window.addEventListener('scroll', scroll)

//create 'scroll' function
function scroll() {
  scrollPosition = window.scrollY

  //fire 'showNav' function
  showNav(scrollPosition)
}

//create 'showNav' function
function showNav(scrollPosition) {
  var bgImageHeight = bgImage.offsetHeight

  if (scrollPosition >= bgImageHeight) {
    //if the scroll position is less than 200px, don't show the background
    nav.classList.add('navigation--bg-visible')
  } else {
    //otherwise show
    nav.classList.remove('navigation--bg-visible')
  }
}
