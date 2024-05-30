// Get the menu container element
// const menuContainer = document.getElementById('menuToggle');

// Get the menu toggle button element
const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('ul.menuMobile');
const links = menu.querySelectorAll('li');
console.log('links',links);

var tl = gsap.timeline({ paused: true });

tl.to(menu, { duration: 1, opacity: 1, height: '100vh', ease:'expo.inOut'});
// từ trái qua
//tl.from(links, { duration: 1, opacity: 0, x: -20, stagger: 0.1, ease: 'expo.inOut', },"-= 0.5");

//menu item trên xuống
tl.from(links, { duration: 1, opacity: 0, y: 20, stagger: 0.1, ease: 'expo.inOut', }, "-= 0.5");

tl.reverse();

// Add an event listener to the button to trigger the animation
menuToggle.addEventListener('click', () => {
    // console.log('menu mobile click');
    tl.reversed(!tl.reversed());
});

//animation humberger

var upper = document.getElementsByClassName('upper');
var middle = document.getElementsByClassName('middle');
var lower = document.getElementsByClassName('lower');

var tl_humberger = new TimelineLite({ paused: true, reversed: true });

tl_humberger
    .to(upper, 0.5, { attr: { d: "M8,2 L2,8" }, x: 1, ease: Power2.easeInOut }, 'start')
    .to(middle, 0.5, { autoAlpha: 0 }, 'start')
    .to(lower, 0.5, { attr: { d: "M8,8 L2,2" }, x: 1, ease: Power2.easeInOut }, 'start');

document.querySelector('.hamburger').addEventListener('click', function () {
    //console.log('humberger click');
    tl_humberger.reversed() ? tl_humberger.play() : tl_humberger.reverse();
})