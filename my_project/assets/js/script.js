'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 


let i = 0;
    let images = [
      "./assets/images/casagrand2.png",
      "./assets/images/casagrand3.png",
      "./assets/images/casagrand4.png",
      "./assets/images/casagrand5.png",
      "./assets/images/casagrand6.png"
    ];

    function showImage() {
      document.getElementById("pic").src = images[i];
    }

    function nxt() {
      i++;
      if (i >= images.length) i = 0;
      showImage();
    }

    function prev() {
      i--;
      if (i < 0) i = images.length - 1;
      showImage();
    }

    // Auto slider (optional)
    setInterval(nxt, 2000);