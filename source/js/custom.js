$(document).ready(function() {


$('.card').each(function() {
  var ths = $(this);
  var ind = $(this).index();
  ths.attr("data-number", ind);

});

  $('.preview__slider').slick({
    speed: 500,
    slidesToShow:  3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    nextArrow: '<button type="button" class="orange-rounded-btn-next preview__orange-rounded-btn-next">Следующий слайд</button>',
    prevArrow: '<button type="button" class="orange-rounded-btn-prev preview__orange-rounded-btn-prev">Предыдущий слайд</button>',
    responsive: [

      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      },

      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      },

      {
        breakpoint: 670,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      }

    ]
  });



  $('.projects-preview').slick({
    speed: 500,
    slidesToShow:  4,
    slidesToScroll: 4,
    infinite: false,
    arrows: true,
    nextArrow: '<button type="button" class="projects-preview__slide-next">Следующий слайд</button>',
    prevArrow: '<button type="button" class="projects-preview__slide-prev">Предыдущий слайд</button>',
    responsive: [

      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false
        }
      },

      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      }

    ]
  });



  $('.viewed__wrapper').slick({
    speed: 500,
    slidesToShow:  2,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    nextArrow: '<button type="button" class="orange-rounded-btn-next viewed__orange-rounded-btn-next">Следующий слайд</button>',
    prevArrow: '<button type="button" class="orange-rounded-btn-prev viewed__orange-rounded-btn-prev">Предыдущий слайд</button>',
    responsive: [

      {
        breakpoint: 1366,
        settings: {
          variableWidth: false,
          arrows: false,
          dots: true
        }
      },

      {
        breakpoint: 670,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  });


  $('.collection__colors-list').slick({
    speed: 500,
    slidesToShow:  4,
    slidesToScroll: 1,
    infinite: false,
    animate: false,
    arrows: false,
    dots: true,

    responsive: [

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          infinite: true
        }

      }
    ]
  });

  $(".collection__colors-list .slick-slide").click(function() {
    $(".collection__colors-list .slick-slide").removeClass('collection__slick-active');
    $(this).addClass('collection__slick-active');
  });

  $('.certificates__slider').slick({
    speed: 500,
    slidesToShow:  4,
    slidesToScroll: 4,
    infinite: false,
    arrows: true,
    nextArrow: '<button type="button" class="orange-rounded-btn-next">Следующий слайд</button>',
    prevArrow: '<button type="button" class="orange-rounded-btn-prev">Предыдущий слайд</button>',
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true
        }
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      }

    ]
  });

  $('.partners-slider').slick({
    speed: 500,
    slidesToShow:  4,
    slidesToScroll: 4,
    infinite: false,
    arrows: true,
    nextArrow: '<button type="button" class="orange-rounded-btn-next">Следующий слайд</button>',
    prevArrow: '<button type="button" class="orange-rounded-btn-prev">Предыдущий слайд</button>',
    responsive: [

      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '20%',
          infinite: true
        }
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '10%',
          infinite: true
        }
      },

      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '20%',
          infinite: true
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '10.625%',
          infinite: true
        }
      },

    ]
  });

  // $('.ab-charcs_slider').slick({
  //   speed: 500,
  //   slidesToShow:  2,
  //   slidesToScroll: 1,
  //   infinite: false,
  //   arrows: true,
  //   nextArrow: '<button type="button" class="orange-rounded-btn-next orange-rounded-btn-next--ab-charcs">Следующий слайд</button>',
  //   prevArrow: '<button type="button" class="orange-rounded-btn-prev orange-rounded-btn-prev--ab-charcs">Предыдущий слайд</button>',
  //   responsive: [

  //     {
  //       breakpoint: 1400,
  //       settings: {
  //         slidesToShow: 2
  //       }
  //     },

  //     {
  //       breakpoint: 1366,
  //       settings: {
  //         variableWidth: false,
  //         slidesToShow: 2,
  //         arrows: false,
  //         dots: true
  //       }
  //     },

  //     {
  //       breakpoint: 670,
  //       settings: {
  //         variableWidth: false,
  //         slidesToShow: 1,
  //         arrows: false,
  //         dots: true,
  //       }
  //     }

  //   ]
  // });

  $('.img-slider').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    nextArrow: '<button type="button" class="orange-rounded-btn-next">Следующий слайд</button>',
    prevArrow: '<button type="button" class="orange-rounded-btn-prev">Предыдущий слайд</button>',
    responsive: [

      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          infinite: false
        }
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      },

    ]
  });

$('.preview__slider .card__images, .viewed__item .card__images').each(function(){
  $(this).slick({
    speed: 500,
    arrows: false,
    draggable: false,
    slidesToShow:  1,
    asNavFor: $(this).parent().find('.card__colors'),
    slidesToScroll: 1,
    infinite: false,
    responsive: [

      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
        }
      }

    ]
  });
});
$('.preview__slider .card__colors, .viewed__item .card__colors').each(function(){
  $(this).slick({
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    draggable: false,
    asNavFor: $(this).parent().find('.card__images'),
    focusOnSelect: true
  });
});

function setActiveSlideColor () {
  $('.card__colors').each(function(){
    $(this).find(".slick-slide").removeClass("active");
    $(this).find(".slick-slide:first-of-type").addClass("active");
    var cur = $(this).find(".slick-slide");
      cur.click(function() {
        cur.not($(this)).removeClass("active");
        $(this).addClass("active");
        console.log($(this));
      });
  });
}

setActiveSlideColor();

$( window ).resize(setActiveSlideColor);


  // Вакханалия слайдеров

  $('.f-about__slick').slick({
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
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '10%',
          arrows: false,
          dots: true
        }
      },

      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '50px',
          arrows: false,
          dots: true
        }
      },

      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '25px',
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
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    centerMode: true,
    centerPadding: '21.2%',
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="main-header__slick-next">Следующий слайд</button>',
    prevArrow: '<button type="button" class="main-header__slick-prev">Предыдущий слайд</button>',
    responsive: [
      {
        breakpoint: 1600,
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


  $('.news__list:not(.news__list--full)').slick({
    mobileFirst: true,
    arrows: false,
    dots: true,
    infinite: false,
    responsive: [

      {
        breakpoint: 670,
        settings: 'unslick'
      }
    ]
  });


  $('.catalog-top-slider').slick({
    speed: 500,
    nextArrow: '<button type="button" class="catalog-top-slider__next">Следующий слайд</button>',
    prevArrow: '<button type="button" class="catalog-top-slider__prev">Предыдущий слайд</button>',
  });

  $('.collection__gallery').slick({
    speed: 500,
    slidesToShow:  1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    nextArrow: '<button type="button" class="top-gallery__next">Следующий слайд</button>',
    prevArrow: '<button type="button" class="top-gallery__prev">Предыдущий слайд</button>'
  });


  $('.top-gallery:not(".collection__gallery")').slick({
    speed: 500,
    slidesToShow:  1,
    slidesToScroll: 1,
    infinite: false,
    draggable: false,
    arrows: true,
    asNavFor: '.top-gallery__thumbs',
    nextArrow: '<button type="button" class="top-gallery__next">Следующий слайд</button>',
    prevArrow: '<button type="button" class="top-gallery__prev">Предыдущий слайд</button>'
  });

  $('.top-gallery__thumbs').slick({
    speed: 500,
    slidesToShow:  4,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: false,
    arrows: false,
    asNavFor: '.top-gallery',
    dots: true,

    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },

      {
        breakpoint: 670,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });


  // Рамка для активного thumb в блоках top-gallery

  $('.top-gallery__thumbs').each(function(){e
    $(this).find('.slick-slide').eq(0).addClass("top-gallery__thumb--active");
  });

  // Исчезает рамка при ресайзе, сделал пока так:

  $(window).resize(function() {
    $('.top-gallery__thumbs').each(function(){
      $(this).find('.slick-slide').eq(0).addClass("top-gallery__thumb--active");
    });
  });


  $('.top-gallery .slick-arrow').click(function () {
    $(".top-gallery__thumbs .slick-slide").removeClass('top-gallery__thumb--active');
    $('.top-gallery__thumbs .slick-current').addClass('top-gallery__thumb--active');
  });

  $(".top-gallery__thumbs .slick-slide").click(function() {
    $(".top-gallery__thumbs .slick-slide").removeClass('top-gallery__thumb--active');
    $(this).addClass('top-gallery__thumb--active');
  });

  // $.scrollify({
  //   section : ".f-about__stats",
  //   sectionName : "section-name",
  //   interstitialSection : "",
  //   easing: "easeOutExpo",
  //   scrollSpeed: 1100,
  //   offset : 0,
  //   scrollbars: true,
  //   standardScrollElements: "",

  // });


   // Мобильное меню

  (function () {

    $('.main-header .menu-toggle').click(function(e) {
      e.stopPropagation();
      $(this).toggleClass('open');
      $('.main-nav').toggleClass('main-nav--show');
      $('.mobile-header').toggleClass('mobile-header--menu-opened');
      var isLogoTransparent = $('.mobile-header__logo').is('.transparent')
      if(!isLogoTransparent) {
        $('.mobile-header__logo').addClass('transparent');
      } else {
        $('.mobile-header__logo').removeClass('transparent');
      }
    });


    $('.page-nav .menu-toggle').click(function(e) {
      e.stopPropagation();
      $(this).toggleClass('open');
      $('.page-nav').toggleClass('page-nav--menu-opened');
      $('.page-nav__list').toggleClass('page-nav__list--show');
      var isLogoTransparent = $('.page-nav__logo').is('.transparent')
      if(!isLogoTransparent) {
        $('.page-nav__logo').addClass('transparent');
      } else {
        $('.page-nav__logo').removeClass('transparent');
      }
    });


    $(window).click(function(e) {
      e.stopPropagation();
      e.preventDefault();
      var target = $(e.target);
      var targetIsNavLink = target.is('.page-nav__list a')
      if (!targetIsNavLink) {
        $('.page-nav__list').removeClass('page-nav__list--show');
        $('.page-nav .menu-toggle').removeClass('open');
        $('.page-nav__logo').removeClass('transparent');
      } else {
        return false;
      }
    });

    $(window).click(function(e) {
      var target = $(e.target);
      var targetIsNavLink = target.is('.main-nav__link');
      var targetIsSocial = target.is('.top-icons-panel');

      var g = $('.top-icons-panel').find('*');
      var targetIsSocialElems = target.is(g);
      if (!targetIsNavLink && !targetIsSocialElems) {
        console.log(target);
        $('.main-nav').removeClass('main-nav--show');
        $('.mobile-header__logo').removeClass('transparent');
        $('.mobile-header .menu-toggle').removeClass('open');
      } else {
        return false;
      }
    });

  })();

// Обрезание текста, если его много

$('.news__desc').each(function() {
    var ths = $(this);
   if(ths.height()>132){
       ths.addClass('news__desc--ellipsis');
   }
});

$('.news__desc').change(function () {
  if($(this).height()>130) {
    console.log('bla')
  }
});

$('.search-result__art-text').each(function() {
  var ths = $(this);
 if(ths.height()>88){
     ths.addClass('search-result__art-text--clipped');
 }
});


// Аккордион в каталоге

  (function () {

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

  // Замена текста кнопки скрыть/раскрыть фильтр при клике на нее

  $('.catalog__collapse-filter').click(function () {
    if ($(this).hasClass('catalog__collapse-filter--active')) {
      $(this).text('Скрыть фильтр')
    } else {
      $(this).text('Раскрыть фильтр');
    }
  });

  // Попап на страницах отдельного элемента коллекции

  function openModal () {
    collModal.classList.add('modal--show');
  }

  function closeModal () {
    collModal.classList.remove('modal--show');
  }

  var collModal = document.querySelector('.modal');
  var closeCollModalBtn = document.querySelector('.coll-popup__close-btn');
  var collForm = $('.coll-popup');
  var collElems = document.querySelectorAll('.coll-elems__item');

  if (closeCollModalBtn && collModal) {
    closeCollModalBtn.addEventListener('click', function () {
      collModal.classList.remove('modal--show');
    });
  }


  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27 && collModal) {
      if (collModal.classList.contains('modal--show')) {
        closeModal();
      }
    }
  });

  window.addEventListener('click', function (evt) {
    if (evt.target === collModal && collModal) {
      closeModal();
    }
  });



  // $('.search-input-wrap a').on('click', function(e) {
  //   e.preventDefault();
  //   var par = $(this).parents('.search-nav');
  //   var input = par.find('input[type="text"]');
  //   if (par.hasClass('focused') && input.val().length>0){
  //     input.parents('form').submit();
  //   } else {
  //     par.toggleClass('focused');
  //     input.focus();
  //   }
  // });


//  Центрирование модального окна в зависимости величины скролла страницы

var pageHeight = $(document).height();

$('.modal').css('height', pageHeight);

// var topScroll;

// $(document).scroll(function() {
//   var topScroll = $(document).scrollTop();
// });

$('.coll-elems__item').click(function () {
  $('.modal').addClass('modal--show');
  var topScroll = $(document).scrollTop() + ($(window).height() / 2) ;
  $('.coll-popup').css('top', topScroll);
});



// Верхний вертикальный отступ для body в зависимости от высоты шапки

var innerHeaderHeight = $('.page-header').height();
$('.inner-body').css('padding-top', innerHeaderHeight);

$(window).resize(function() {
  innerHeaderHeight = $('.page-header').height();
  $('.inner-body').css('padding-top', innerHeaderHeight);
});


// Блок поиска на главной (разрешение > 1024px)

$(".top-icons-panel__item--search a").click(function(evt) {
  evt.stopPropagation();
  $(".search-box").toggleClass('search-box--show');
  $("input[type='text']").focus();
});

  $(window).click(function (evt) {
    var target = $(evt.target);
    var searchBox = $(".search-box")
    if(searchBox.hasClass('search-box--show') && (target !== searchBox)) {
      searchBox.removeClass('search-box--show');
    } else {
      return;
    }
  });



$(document).keyup(function(e) {
  var searchBox = $(".search-box")
  if (e.keyCode === 27) {
    searchBox.removeClass('search-box--show');
  }
});

$('.mobile-header__search').click(function (evt) {
  evt.stopPropagation();
  $(".search-box").toggleClass('search-box--show');
  $("input[type='text']").focus();
});

$('.page-nav__search').click(function (evt) {
  evt.preventDefault();
  evt.stopPropagation();
  $(".search-box").toggleClass('search-box--show');
  $("input[type='text']").focus();
});




$('.top-icons-panel__search-btn').click(function (e) {
  e.stopPropagation();
  $( ".top-icons-panel__input-wrapper").animate({
    width: "-=300px"
  }, 500, function () {
    $('.top-icons-panel__input-wrapper input').css('display', 'none');
  }
);
});

// Выезжающая строка поиска на главной (разрешение < 1024px)

$('.mobile-header__search').click(function (evt) {
  evt.stopPropagation();
  $('.mobile-search__form').css('display', 'block');
  $( ".mobile-search").animate({
    width: "+=37.4%"
  }, 500);
});


$('.mobile-search__btn').click(function () {
  $( ".mobile-search").animate({
    width: "-=37.4%"
  }, 500, function () {
    $('.mobile-search__form').css('display', 'none');
  }
);
});


// Оповещение при успешной подписки на новости в подвале

$('.subscribe__form').submit(function () {
  if($(this).find('.subscribe__input').val().length > 2 ) {
    $('.subscribe-success-modal').removeClass('hidden');
    setTimeout("$('.subscribe-success-modal').fadeOut(); ", 3000);
  } else {
    console.log('bla bla bla');
  }
});


$('.subscribe__btn').click(function () {
  if($('.subscribe__input').val().length > 2 ) {
    $('.subscribe-success-modal').removeClass('hidden');
    setTimeout("$('.subscribe-success-modal').addClass('hidden'); ", 3000);
  } else {
    console.log('bla bla bla');
  }
});


  // Страница "Партнеры". Изменение стилей блоков в зависимости от их кол-ва

  var catalogList = document.querySelector('.catalogs__list');

  if (catalogList) {

    if ((window.matchMedia("(min-width: 1024px)").matches) && catalogList.children.length > 3) {
      catalogList.classList.add('catalogs__list--more-4')
    }

    if ((window.matchMedia("(min-width: 1024px)").matches) && catalogList.children.length > 3) {
      catalogList.classList.add('catalogs__list--more-4')
    }

    window.addEventListener("resize", function() {
      if ((window.matchMedia("(min-width: 1024px)").matches) && catalogList.children.length > 3) {
        catalogList.classList.add('catalogs__list--more-4')
      }
    });

    var docsList = document.querySelector('.catalogs__list');

    if (docsList) {
      if ((window.matchMedia("(min-width: 1024px)").matches) && docsList.children.length < 3) {
        docsList.classList.add('docs__list--d-center')
      }
    }
  }


  // Кнопка "Наверх"

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

        moveVerticalMenu = function () {
          if($(window).width() > 1024) {
            var scrollTop = $(window).scrollTop();
            var verticalMenu = $('.top-icons-panel');
            if (scrollTop > 10) {
              verticalMenu.hide();
            }

            if (scrollTop > 500) {
              verticalMenu.addClass('top-icons-panel--center-vertical');
              verticalMenu.show();
            }
          } else {
            return false;
          }

        };

    backToTop();

    $(window).on('scroll', function () {
        backToTop();
        moveVerticalMenu();
    });

    $(window).on('resize', moveVerticalMenu);

    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

// Белый непрозрачный фон шапки при скролле > 80px

$(window).scroll(function() {
  var top = $(document).scrollTop();
  if (top > 80) {
    $('.main-header__top-header').addClass('main-header__top-header--white-bg');
  } else {
    $('.main-header__top-header').removeClass('main-header__top-header--white-bg');
  }

});


// Табы на странице "Где купить"
$('.city-choise__regions').each(function(){
  $(this).children('.city-choise__region').eq(0).addClass("city-choise__region--current");
});
$('.city-choise__lists').each(function(){
  $(this).children('.city-choise__cities-wrapper').not(":first").hide();
});
$(".city-choise__region").click(function() {
  var ind = $(this).index();
  if(!$(this).hasClass('city-choise__region--current')){
      $(this).parent('.city-choise__regions').children('.city-choise__region').removeClass("city-choise__region--current").eq(ind).addClass("city-choise__region--current");
      $(this).parent('.city-choise__regions').next('.city-choise__lists').children('.city-choise__cities-wrapper').hide().eq(ind).fadeIn(300);
  }
});

});
