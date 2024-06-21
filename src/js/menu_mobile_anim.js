// Get the menu container element
// const menuContainer = document.getElementById('menuToggle');

// Get the menu toggle button element
const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('ul.menuMobile');
const links = menu.querySelectorAll('li');
const has_submenu = document.querySelectorAll('.has__submenu');
const submenu = document.querySelector('.submenu');

var tl = gsap.timeline({ paused: true });

tl.to(menu, { duration: 0.6, opacity: 1, height: '100vh', ease: 'expo.inOut' });
// từ trái qua
//tl.from(links, { duration: 1, opacity: 0, x: -20, stagger: 0.1, ease: 'expo.inOut', },"-= 0.5");

//menu item trên xuống
tl.from(links, { duration: 0.6, opacity: 0, y: 20, stagger: 0.1, ease: 'expo.inOut' }, "-= 0.5");

tl.reverse();

// Add an event listener to the button to trigger the animation
menuToggle.addEventListener('click', () => {
    tl.reversed(!tl.reversed());
});

// var tl_menu = gsap.timeline({ paused: true });

// tl_menu.to(menu, { duration: 0.5, xPercent: -100, ease: 'expo.inOut' })
//     .to(submenu, { duration: 0.5, x: 0, ease: 'expo.inOut' }, "-=0.5"); // Thêm "-=0.5" để đảm bảo rằng các animation xảy ra đồng thời

// has_submenu.forEach(item => {
//     item.addEventListener('click', () => {
//         tl_menu.play();
//     });
// });


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
    tl_humberger.reversed() ? tl_humberger.play() : tl_humberger.reverse();

})



document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const toggleIcons = document.querySelectorAll('.toggle-icon');

    menuItems.forEach((menuItem, index) => {
        const toggleIcon = toggleIcons[index];
        const submenu = menuItem.closest('.has__submenu').querySelector('.submenu');
        console.log('menuItem', menuItem);
        const toggleSubmenu = (event) => {
            event.preventDefault();
            const isExpanded = submenu.style.display === 'flex';

            if (isExpanded) {
                gsap.to(submenu, {
                    height: 0,
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        submenu.style.display = 'none';
                    }
                });
                toggleIcon.classList.remove('ri-subtract-line');
                toggleIcon.classList.add('ri-add-line');
            } else {
                submenu.style.display = 'flex';
                gsap.fromTo(submenu,
                    { height: 0, opacity: 0 },
                    { height: 'auto', opacity: 1, duration: 0.5 }
                );
                toggleIcon.classList.remove('ri-add-line');
                toggleIcon.classList.add('ri-subtract-line');
            }
        };

        menuItem.addEventListener('click', toggleSubmenu);
        toggleIcon.addEventListener('click', toggleSubmenu);
    });
});
