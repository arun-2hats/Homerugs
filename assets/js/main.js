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
      600: {
        slidesPerView: 2, 
      },
      0: {
        slidesPerView: 1,
      }
    }
  });

  // Brand switching functionality
  function initBrandSwitching() {
    const brandSlides = document.querySelectorAll('.brand-slide');
    const brandGridSections = document.querySelectorAll('.brand-grid-section');

    brandSlides.forEach(slide => {
      slide.addEventListener('click', function() {
        const brandType = this.getAttribute('data-brand');
        
        // Remove active class from all slides
        brandSlides.forEach(s => s.classList.remove('active'));
        // Add active class to clicked slide
        this.classList.add('active');
        
        // Hide all grid sections
        brandGridSections.forEach(section => {
          section.classList.remove('active');
        });
        
        // Show the corresponding grid section
        const targetSection = document.querySelector(`.brand-grid-section[data-brand="${brandType}"]`);
        if (targetSection) {
          targetSection.classList.add('active');
        }
      });
    });
  }

  // Initialize brand switching when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initBrandSwitching();
  });