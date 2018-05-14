$(document).ready(function() {

  $('.about__slick').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '72px'
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20%',
          arrows: false,
          dots: true
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '30px',
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('.main-header__slick').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    centerMode: true,
    centerPadding: '21.2%',
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="main-header__slick-next">Next</button>',
    prevArrow: '<button type="button" class="main-header__slick-prev">Previous</button>',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          centerPadding: '15%'
        }
      },

    {
      breakpoint: 1300,
      settings: {
        centerPadding: '12%'
      }
    },

    {
      breakpoint: 1025,
      settings: {
        centerPadding: '9%'
      }
    },

    {
      breakpoint: 769,
      settings: {
        centerPadding: '11.5%'
      }
    },

    {
      breakpoint: 767,
      settings: {
        centerPadding: '0',
        centerMode: false
      }
    },
  ]
  });


  $('.news__list').slick({
    mobileFirst: true,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    responsive: [

      {
        breakpoint: 767,
        settings: 'unslick',

      }
    ]
  });

  $('.catalog-top-slider').slick({
    speed: 500,
    useTransform: false,
    nextArrow: '<button type="button" class="catalog-top-slider__next">Next</button>',
    prevArrow: '<button type="button" class="catalog-top-slider__prev">Previous</button>',
  });

  $('.card__images').slick({
    speed: 500,
    arrows: false,
    asNavFor: '.card__colors'
  });

  $('.card__colors').slick({
    speed: 500,
    slidesToShow:  8,
    slidesToScroll: 1,
    infinite: false,
    draggable: false,
    arrows: true,
    asNavFor: '.card__images',
    focusOnSelect: true,
    nextArrow: '<button type="button" class="card__color-next">Next</button>',
    prevArrow: '<button type="button" class="card__color-prev">Previous</button>'
  });

  $('.collection__gallery').slick({
    speed: 500,
    slidesToShow:  1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    nextArrow: '<button type="button" class="collection__gallery-next">Next</button>',
    prevArrow: '<button type="button" class="collection__gallery-prev">Previous</button>'
  });

  $('.coll-examples__slider').slick({
    speed: 500,
    slidesToShow:  4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    nextArrow: '<button type="button" class="coll-examples__slide-next">Next</button>',
    prevArrow: '<button type="button" class="coll-examples__slide-prev">Previous</button>'
  });

  (function () {

    $('.main-header .menu-toggle').click(function() {
      $(this).toggleClass('open');
      $('.main-nav').toggleClass('main-nav--show');
      $('.mobile-header').toggleClass('mobile-header--menu-opened');
      // active = true;
      // if (active) {
      //   $(window).click(function() {
      //     $('.main-nav').removeClass('main-nav--show');
      //   });
      // }

    });


    $('.page-nav .menu-toggle').click(function() {
      $(this).toggleClass('open');
      $('.page-nav').toggleClass('page-nav--menu-opened');
      $('.page-nav__list').toggleClass('page-nav__list--show');
    });

    var showFilter = document.querySelector(".catalog__collapse-filter");
    $(".catalog__collapse-filter").click(function() {
      $(this).toggleClass("catalog__collapse-filter--active");

      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } else {
          panel.style.display = "block";
      }
    });

    // showFilter.addEventListener("click", function() {
    //     this.classList.toggle("catalog__collapse-filter--active");

    //     var panel = this.nextElementSibling;
    //     if (panel.style.display === "block") {
    //         panel.style.display = "none";
    //     } else {
    //         panel.style.display = "block";
    //     }
    // });


  })();


  (function () {

    var acc = document.querySelectorAll(".acc-toggle");

    for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("acc-toggle--active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  })();

  $('.catalog__collapse-filter').click(function () {
    if ($(this).hasClass('catalog__collapse-filter--active')) {
      $(this).text('Скрыть текст')
    } else {
      $(this).text('Раскрыть текст');
    }
  });

  // document.querySelector('.catalog__collapse-filter').addEventListener('click', function () {
  //   if (this.classList.contains('catalog__collapse-filter--active')) {
  //     this.textContent = 'Скрыть фильтр';
  //   } else {
  //     this.textContent = 'Раскрыть фильтр';
  //   }
  // })

  if ($('.back-to-top').length) {
    var scrollTrigger = 800, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.back-to-top').addClass('show');
            } else {
                $('.back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

$(window).scroll(function() {
  var top = $(document).scrollTop();
  if (top > 80) {
    $('.main-header__top-header').addClass('main-header__top-header--white-bg');
  } else {
    $('.main-header__top-header').removeClass('main-header__top-header--white-bg');
  }

});

});
