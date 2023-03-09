
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination:{
        clickable:true,

    },
    spaceBetween:10,
    slidesPerView:1,
    speed:2000,
    autoplay: {
        delay: 2000,
      },
    // If we need pagination
    pagination: {
        clickable:true,
    },

    breakpoints:{
        640:{
            slidesPerView:2,
            spaceBetween:20
        },
        1024:{
            slidesPerView:3,
            spaceBetween:50,
        }

    },

    // And if we need scrollbar
    
});