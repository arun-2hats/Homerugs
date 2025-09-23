  const swiper = new Swiper('.banner-slider', {
    loop: true,               // infinite loop
    autoplay: {
      delay: 3000,            // auto slide every 3s
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,        // click dots to change
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'slide',          // you can also try 'fade'
  });


  const brandSwiper = new Swiper('.brand-slider', {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,   // default (desktop)
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 4, // desktop
      },
      768: {
        slidesPerView: 3, // tablet
      },
      480: {
        slidesPerView: 2, // mobile
      },
      0: {
        slidesPerView: 1, // very small
      }
    }
  });