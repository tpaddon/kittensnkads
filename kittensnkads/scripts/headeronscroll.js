// JavaScript Document

function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop, // Creates a constant called distanceY that's equal to the distance scrolled down the webpage
  shrinkOn = 0, // Sets the variable shrinkOn to 0
  navBar = document.getElementById('myTopnav'), // Finds the element id myTopnav and sets it to the navBar variable
  logo = document.getElementById('logo-scroll'), // Finds the element id logo-scroll and sets it to the logo variable
  logoImage = document.getElementById('logo-image'), // Finds the element id logo-image and sets it to the logoImage variable
  navLinks = document.getElementsByClassName('navlink'), // Finds the element class navLink and sets it to the navLinks variable
  bars = document.getElementById('bars'); // Finds the element class icon and sets it to the bars variable
  
  if (distanceY > shrinkOn) { // Tests if the distance is scrolled is greater than the shrinkOn value
    navBar.classList.add("smaller"); // Adds the smaller class
	logo.classList.add("smaller");
	logoImage.classList.add("smaller");
	bars.classList.add("smaller");
	for(let i = 0; i <= navLinks.length; i++){ // Runs through all the links in the navigation bar
		navLinks[i].classList.add("smaller"); // For each link is adds the smaller class
	}
  } else { // Else it removes the smaller class from each element
    navBar.classList.remove("smaller");
	logo.classList.remove("smaller");
	logoImage.classList.remove("smaller");
	bars.classList.remove("smaller");
	for(let i = 0; i <= navLinks.length; i++){
		navLinks[i].classList.remove("smaller");
	}
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll); // Contantly tests if the user has scrolled down the webpage and if they have it runs the resizeHeaderOnScroll function