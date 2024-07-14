const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('ul.menuMobile');
const links = menu.querySelectorAll('li');

var tl = gsap.timeline({
    paused: true,
    onReverseComplete: () => {
        menu.style.display = 'none';
    }
});

// Khi menu xuất hiện
tl.set(menu, { display: 'block', opacity: 0, height: '0' })
  .to(menu, { duration: 0.5, opacity: 1, height: '100vh', ease: 'expo.inOut' })
  .from(links, { duration: 0.5, opacity: 0, y: 20, stagger: 0.1, ease: 'expo.inOut' }, "-=0.5");

// Khi menu ẩn
tl.reverse();

// Add an event listener to the button to trigger the animation
menuToggle.addEventListener('click', () => {
    if (tl.reversed()) {
        menu.style.display = 'block'; // Hiển thị menu trước khi animation chạy
    }
    tl.reversed(!tl.reversed());
});

// Handle submenu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const toggleIcons = document.querySelectorAll('.toggle-icon');

    menuItems.forEach((menuItem, index) => {
        const toggleIcon = toggleIcons[index];
        const submenu = menuItem.closest('.has__submenu').querySelector('.submenu');

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
