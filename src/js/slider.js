const swiper = new Swiper('.swiper', {
    slidesPerView:4,    
    spaceBetween:48,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    watchOverflow: true,
    // Navigation arrows
    navigation: {
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
        clickable: true,
        hideOnClick: false
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
         
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView:2,
            spaceBetween: 30
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        1024: {
            slidesPerView: 4,
            spaceBetween: 30
        }

    }    
});


const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper_btn_next',
        prevEl: '.swiper_btn_prev'
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
         
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView:2,
            spaceBetween: 30
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        1024: {
            slidesPerView: 4,
            spaceBetween: 30
        }

    }   
});

