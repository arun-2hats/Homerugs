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
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false,
    },
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
        slidesPerView: 2,
      }
    }
  });

  // Desktop Wohnwelten dropdown: open on hover
  const desktopDropdownLi = document.querySelector('.main-navigation .dropdown');
  if (desktopDropdownLi) {
    const trigger = desktopDropdownLi.querySelector('[data-bs-toggle="dropdown"]');
    const menu = desktopDropdownLi.querySelector('.dropdown-menu');
    if (trigger && menu && typeof bootstrap !== 'undefined' && bootstrap.Dropdown) {
      const dropdown = new bootstrap.Dropdown(trigger, { autoClose: true });
      let hideTimeoutId;

      const showOnHover = () => {
        clearTimeout(hideTimeoutId);
        dropdown.show();
      };
      const hideAfterDelay = () => {
        hideTimeoutId = setTimeout(() => dropdown.hide(), 120);
      };

      desktopDropdownLi.addEventListener('mouseenter', showOnHover);
      desktopDropdownLi.addEventListener('mouseleave', hideAfterDelay);

      // keyboard focus support
      trigger.addEventListener('focus', showOnHover);
      menu.addEventListener('focusout', (e) => {
        if (!desktopDropdownLi.contains(e.relatedTarget)) {
          hideAfterDelay();
        }
      });
    }
  }

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


  // Mobile search toggle
  const mobileSearchToggle = document.getElementById('mobile-search-toggle');
  const mobileSearchBar = document.getElementById('mobileSearch');
  if (mobileSearchToggle && mobileSearchBar) {
    mobileSearchToggle.addEventListener('click', () => {
      const isOpen = mobileSearchBar.classList.toggle('is-open');
      mobileSearchBar.setAttribute('aria-hidden', String(!isOpen));
      mobileSearchToggle.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        const input = mobileSearchBar.querySelector('input');
        if (input) setTimeout(() => input.focus(), 160);
      }
    });
  }

  // Product dropdown image functionality
  function initProductDropdowns() {
    const clickableImages = document.querySelectorAll('.clickable-image');
    
    // Function to position dropdown near the clicked element
    function positionDropdown(dropdown, clickedElement) {
      const rect = clickedElement.getBoundingClientRect();
      const dropdownRect = dropdown.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      
      let left, top;
      
      // Try to position to the right of the card
      if (rect.right + 320 <= viewportWidth) {
        left = rect.right + 10;
      } 
      // If not enough space on right, try left
      else if (rect.left - 310 >= 0) {
        left = rect.left - 310;
      }
      // If no space on sides, center horizontally
      else {
        left = Math.max(10, (viewportWidth - 300) / 2);
      }
      
      // Position vertically - try to align with top of card
      top = rect.top;
      bottom = rect.bottom;
      
      // Ensure dropdown doesn't go below viewport
      if (top + dropdownRect.height > viewportHeight) {
        top = Math.max(10, viewportHeight - dropdownRect.height - 10);
      }
      
      // Ensure dropdown doesn't go above viewport
      if (top > 10) {
        top = 10;
      }

      if (bottom > 10) {
        bottom = 200;
      }
      
      dropdown.style.left = left + 'px';
      // dropdown.style.top = top + 'px';
      dropdown.style.bottom = bottom + 'px';
    }
    
    clickableImages.forEach(imageWrapper => {
      imageWrapper.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Find the product card and its associated dropdown
        const productCard = this.closest('.product-card');
        const productId = productCard.getAttribute('data-product-id');
        const dropdown = document.getElementById(`dropdown-${productId}`);
        
        if (dropdown) {
          // Check if this dropdown is already open
          const isCurrentlyOpen = dropdown.style.display !== 'none' && dropdown.style.display !== '';
          
          // First, close all open dropdowns
          const allDropdowns = document.querySelectorAll('.product-dropdown-image');
          allDropdowns.forEach(dd => {
            if (dd.classList.contains('show')) {
              dd.classList.remove('show');
              setTimeout(() => {
                dd.style.display = 'none';
              }, 300);
            }
          });
          
          // If the clicked dropdown wasn't open, show it after a brief delay
          if (!isCurrentlyOpen) {
            setTimeout(() => {
              dropdown.style.display = 'block';
              
              // Position the dropdown
              positionDropdown(dropdown, productCard);
              
              // Trigger animation after a small delay to ensure display is set
              setTimeout(() => {
                dropdown.classList.add('show');
              }, 10);
            }, 50); // Small delay to ensure other dropdowns start closing
          }
        }
      });
    });

    // Close button functionality
    const closeButtons = document.querySelectorAll('.dropdown-close-btn');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const dropdown = this.closest('.product-dropdown-image');
        if (dropdown) {
          dropdown.classList.remove('show');
          setTimeout(() => {
            dropdown.style.display = 'none';
          }, 300);
        }
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.product-card') && !e.target.closest('.product-dropdown-image')) {
        const openDropdowns = document.querySelectorAll('.product-dropdown-image.show');
        openDropdowns.forEach(dropdown => {
          dropdown.classList.remove('show');
          setTimeout(() => {
            dropdown.style.display = 'none';
          }, 300);
        });
      }
    });

    // Reposition dropdowns on window resize
    window.addEventListener('resize', function() {
      const openDropdowns = document.querySelectorAll('.product-dropdown-image.show');
      openDropdowns.forEach(dropdown => {
        const productId = dropdown.id.replace('dropdown-', '');
        const productCard = document.querySelector(`[data-product-id="${productId}"]`);
        if (productCard) {
          positionDropdown(dropdown, productCard);
        }
      });
    });

    // Close dropdown on scroll to prevent positioning issues
    window.addEventListener('scroll', function() {
      const openDropdowns = document.querySelectorAll('.product-dropdown-image.show');
      openDropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
        setTimeout(() => {
          dropdown.style.display = 'none';
        }, 300);
      });
    });
  }

  // Initialize product dropdowns when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initBrandSwitching();
    initProductDropdowns();
  });