document.addEventListener('DOMContentLoaded', function () {
    const menuBackground = document.querySelector('.menu-background');
    const menuLinks = document.querySelectorAll('.nav__link');

    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            const rect = this.getBoundingClientRect();
            const containerRect = this.parentNode.parentNode.getBoundingClientRect();

            menuBackground.style.width = `${rect.width}px`;
            menuBackground.style.height = `${rect.height}px`;
            menuBackground.style.left = `${rect.left - containerRect.left}px`;
            menuBackground.style.top = `${rect.top - containerRect.top}px`;
            menuBackground.style.backgroundColor = '#e23b32';
            //console.log("mouse enter");
        });

        link.addEventListener('mouseleave', function () {
            /* Reset background color to transparent on mouse leave */
            menuBackground.style.backgroundColor = 'transparent';
            //console.log("mouse leave");
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hasSubmenu = document.querySelector('.has_submenu');
    const submenu = hasSubmenu.querySelector('.submenu');
    const icon = hasSubmenu.querySelector('.ri-add-line');

    hasSubmenu.addEventListener('click', (event) => {
        event.preventDefault();
        submenu.classList.toggle('hidden');
        submenu.classList.toggle('active');
        icon.classList.toggle('rotate-90');
    });
});
