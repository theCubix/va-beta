//declare variables
var scrollPosition = 0
var nav = document.getElementById('appNavigation')
var bgImage = document.getElementById('appLandingPageBackgroundImage')

//fire 'scroll' function on scroll
window.addEventListener("scroll", scroll)

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
    this.nav.classList.add('navigation--bg-visible')
  } else {
    //otherwise show
    this.nav.classList.remove('navigation--bg-visible')
  }
}