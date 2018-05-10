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
    responsive: [
     
      {
        breakpoint: 767,
        settings: 'unslick',
        
      }
    ]
  });

  (function () {
    var active = false;
    var nav= document.querySelector('.main-nav');
    $('.menu-toggle').click(function() {
      $(this).toggleClass('open');
      $('.main-nav').toggleClass('main-nav--show');
      // active = true;
      // if (active) {
      //   $(window).click(function() {
      //     $('.main-nav').removeClass('main-nav--show');
      //   });
      // }
    
    });
  })();
  

});
