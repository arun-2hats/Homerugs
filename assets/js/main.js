  const swiper = new Swiper('.banner-slider', {
    loop: true,     
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,  
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'slide',   
  });


  const brandSwiper = new Swiper('.brand-slider', {
    loop: true,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4, 
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 2, 
      },
      0: {
        slidesPerView: 1,
      }
    }
  });