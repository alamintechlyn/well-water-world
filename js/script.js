/*=== Javascript function indexing hear===========




==================================================*/

(function ($, window) {
  "use strict";

  var mtJs = {
    m: function () {
      mtJs.d();
      mtJs.methods();
    },
    d: function () {
      this._window = $(window);
      this._document = $(document);
      this._body = $("body");
      this._html = $("html");
    },
    methods: function () {
      this.languageSwicher();
      this.inlineCssActivation();
      this.countDownActivation();
      this.swiperActivation();
      this.productColorSelector();
      this.imgPopup();
      this.sizeSelector();
      this.productDetailsFaq();
      this.productColorWithoutColorName();
      this.eyeViewPopup();
      this.headerSticky();
    },

    // Start Header Sticky
    headerSticky: function () {
      $(document).ready(function () {
        $(window).on("scroll", function () {
          var ScrollBarPostion = $(window).scrollTop();
          if (ScrollBarPostion > 150) {
            $(
              ".pf-header-bottom"
            ).addClass("pf-header-sticky");
          } else {
            $(
              ".pf-header-bottom"
            ).removeClass("pf-header-sticky");
          }
        });
      });
    },
    // End Header Sticky
    // Start Product Details Popup Eye View
    eyeViewPopup: function () {
      $(document).ready(function () {
        // Mobile menu open
        $(".pf-add-to-product-item").on("click", function () {
          $(".pf-product-details-area").addClass("pf-active");
          $(".pf-overlay").addClass("active"); // Show overlay
          $("body").addClass("no-scroll"); // Prevent scrolling
        });
    
        // Mobile menu close via button or overlay
        $(".pf-overlay").on("click", function () {
          $(".pf-product-details-area").removeClass("pf-active");
          $(".pf-overlay").removeClass("active"); // Hide overlay
          $("body").removeClass("no-scroll"); // Restore scrolling
        }); // Closing parenthesis fixed
      });
    },
    
    // End Product Detaisl Popup Eye View

    // Start Size Selectior
    sizeSelector: function () {
      $(document).ready(function () {
        $(document).ready(function () {
          $('.pf-product-size-option').click(function () {
            $('.pf-product-size-option').removeClass('selected'); // Remove 'selected' class from all
            $(this).addClass('selected'); // Add 'selected' class to the clicked one
          });
        });
      });
    },
    // End Size Selectior

    // Start Site bar Faq
    productDetailsFaq: function () {
      $(document).ready(function () {
        let questions = document.querySelectorAll(".pf-faq_question");

        questions.forEach((question) => {
          let icon = question.querySelector(".pf-icon-shape");

          question.addEventListener("click", (event) => {
            const active = document.querySelector(".pf-faq_question.active");
            const activeIcon = document.querySelector(".pf-icon-shape.active");

            if (active && active !== question) {
              active.classList.toggle("active");
              activeIcon.classList.toggle("active");
              active.nextElementSibling.style.maxHeight = 0;
            }

            question.classList.toggle("active");
            icon.classList.toggle("active");

            const answer = question.nextElementSibling;

            if (question.classList.contains("active")) {
              answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
              answer.style.maxHeight = 0;
            }
          });
        });
      });
    },
    // End Site bar Faq
    // Start Product Color Selection with out color name
    productColorWithoutColorName: function () {
      $(document).ready(function () {
        $('.pf-color').on('click', function () {
          $('.pf-color').removeClass('pf-active'); // Remove active class from all
          $(this).addClass('pf-active'); // Add active class to clicked color
        });
      });
    },
    // End Product Color Selection with out color name
    // Start Social Media Insta
    imgPopup: function () {
      $(document).ready(function () {
        $('.pf-social-insta-popup').magnificPopup({
          type: 'image',
          gallery: {
            enabled: true
          }
        });
      });
    },
    // End Social Media Insta

    // Start Product Color Selector
    productColorSelector: function () {
      $(document).ready(function () {
        $('.pf-color').click(function () {
          var $productInfo = $(this).closest('.pf-product-info');
          $productInfo.find('.pf-color').removeClass('pf-selected');
          $(this).addClass('pf-selected');
          const selectedColor = $(this).data('color');
          $productInfo.find('.pf-product-color-name').text(selectedColor);
        });
        $('.pf-product-info').each(function () {
          var $firstColor = $(this).find('.pf-color:first');
          $firstColor.addClass('pf-selected');
          $(this).find('.pf-product-color-name').text($firstColor.data('color'));
        });
      });
    },
    // End Product Color Selector

    // Start Language Swicher 
    languageSwicher: function () {
      $(document).ready(function () {
        $(".pf-lang-switcher").on("click", function (e) {
          e.preventDefault();
          $(".pf-lang-list").toggleClass("pf-lang-list-open");
        });
        $(".pf-lang-list li").each(function () {
          $(this).on("click", function () {
            var logoSrc = $(this).children(".pf-flag").children("img").attr("src");
            var flagText = $(this).children("a").text() + '<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="#525252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
            $(".pf-lang-switcher > .pf-flag img").attr("src", logoSrc);
            $(".pf-lang-switcher > a").html(flagText);
          });
        });
      });
    },
    // End Language Swicher

    // Start Inline Css Activation
    inlineCssActivation: function () {
      $(document).ready(function () {
        $("[data-background").each(function () {
          $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
          );
        });
      });
    },
    // End Inline Css Activation

    // Start Count Down Activation
    countDownActivation: function () {
      $(document).ready(function () {
        let days = 10;
        let hours = 12;
        let minutes = 44;
        let seconds = 29;

        function updateCountdown() {
          if (seconds > 0) {
            seconds--;
          } else {
            seconds = 59;
            if (minutes > 0) {
              minutes--;
            } else {
              minutes = 59;
              if (hours > 0) {
                hours--;
              } else {
                hours = 23;
                if (days > 0) {
                  days--;
                }
              }
            }
          }

          $('#pf-days').text(days.toString().padStart(2, '0'));
          $('#pf-hours').text(hours.toString().padStart(2, '0'));
          $('#pf-minutes').text(minutes.toString().padStart(2, '0'));
          $('#pf-seconds').text(seconds.toString().padStart(2, '0'));
        }

        setInterval(updateCountdown, 1000);
      });
    },
    // End Count Down Activation

    // Start Swiper Activation
    swiperActivation: function () {

      // Start Summer Product
      $(document).ready(function () {
        var swiper = new Swiper(".pf-summer-product", {
          slidesPerView: 2,
          spaceBetween: 25,
          loop: true,
          breakpoints: {
            1920: {
              slidesPerView: 2,
            },
            1350: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          },
          navigation: {
            nextEl: ".pf-summer-product-next-arrrow",
            prevEl: ".pf-summer-product-prev-arrow",
          },
        });
      });
      // End Summer Product

      // Start droppel Product
      $(document).ready(function () {
        var swiper = new Swiper(".pf-product-dropped", {
          slidesPerView: 4,
          spaceBetween: 14,
          loop: true,
          breakpoints: {
            1920: {
              slidesPerView: 4,
            },
            1350: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
          navigation: {
            nextEl: ".pf-dropped-product-next-arrrow",
            prevEl: ".pf-dropped-product-prev-arrow",
          },
        });
      });
      // End droppel Product

            // Start droppel Product
            $(document).ready(function () {
              var swiper = new Swiper(".pf-popular-products", {
                slidesPerView: 4,
                spaceBetween: 14,
                loop: true,
                breakpoints: {
                  1920: {
                    slidesPerView: 4,
                  },
                  1350: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  767: {
                    slidesPerView: 2,
                  },
                  600: {
                    slidesPerView: 1,
                  },
                  0: {
                    slidesPerView: 1,
                  }
                },
                navigation: {
                  nextEl: ".pf-popular-products-next-arrrow",
                  prevEl: ".pf-popular-products-prev-arrow",
                },
              });
            });
            // End droppel Product

      // Start Testimonial Area
      $(document).ready(function () {
        var swiper = new Swiper(".pf-testimonial-slider", {
          slidesPerView: 1,
          loop: true,
          // breakpoints: {
          //   1920: {
          //     slidesPerView: 4,
          //   },
          //   1350: {
          //     slidesPerView: 4,
          //   },
          //   992: {
          //     slidesPerView: 3,
          //   },
          //   768:{
          //     slidesPerView:3,
          //   },
          //   767: {
          //     slidesPerView: 2,
          //   },
          //   600: {
          //     slidesPerView: 1,
          //   },
          //   0:{
          //     slidesPerView:1,
          //   }
          // },
          navigation: {
            nextEl: ".pf-testimonial-next-arrrow",
            prevEl: ".pf-testimonial-prev-arrow",
          },
        });
      });
      // End Testimonial Area



    },
    // End Summer Product Slider



    // End Swiper Activation

  };

  mtJs.m();
})(jQuery, window);