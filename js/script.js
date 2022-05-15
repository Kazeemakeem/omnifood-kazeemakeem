

//UPDATE THE CURRENT COPYRIGHT YEAR

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//MAKE THE MOBILE NAVIGATION WORK

const headerEl = document.querySelector('.header');
const buttonEl = document.querySelector('.btn-mobile-nav');

buttonEl.addEventListener('click', function(){
  headerEl.classList.toggle('nav-open')
})

//FIX SAFARI SMOOTH SCROLL GLITCH

// include below polyfill in html scripts and implement the following codes

//https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js


const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link) {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const href = link.getAttribute('href')

    //for Omnifood logo anchors
    if(href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    // for other links

    if(href !== '#' && href.startsWith('#')) {
      const targetSectionEl = document.querySelector(href);
      targetSectionEl.scrollIntoView({behaviour: 'smooth'})
    }

    // to close the mobile nav for click on its containing links
    headerEl.classList.remove('nav-open')

    //          OR

    // if(link.classList.contains('main-nav-link')) {
    //   headerEl.classList.toggle('nav-open')
    // }
  })
})

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(function(entries) {
  const entry = entries[0];
  if(entry.isIntersecting === false)
  document.body.classList.add('sticky');

  if(entry.isIntersecting)
  document.body.classList.remove('sticky');
}, {
  root: null, /* null = viewport*/
  threshold: 0.1, /* 0 = out of the viewport, 1 = completely in the viewport, 0.1 as option to rootMargin of header height after stickening*/
  // rootMargin: '-80px' /*because the fix to the quick jump is happening a little late.*/
});

obs.observe(sectionHeroEl);


// const headerEl = document.querySelector('.header');
// const menuButton = document.querySelector('.open-button');
// const closeButton = document.querySelector('.close-button');

// function addOpenMobileNavClass() {
//   headerEl.classList.add("nav-open")
// }

// function removeOpenMobileNavClass() {
//   headerEl.classList.remove("nav-open")
// }

// menuButton.addEventListener('click', addOpenMobileNavClass)

// closeButton.addEventListener('click', removeOpenMobileNavClass)



///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

