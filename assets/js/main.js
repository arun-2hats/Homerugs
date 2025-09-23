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