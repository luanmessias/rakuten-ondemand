var breakPoint = 850;


//Functions
function isScrolledIntoView(elem) {
   var $elem = $(elem);
   var $window = $(window);

   var docViewTop = $window.scrollTop();
   var docViewBottom = docViewTop + $window.height();

   var elemTop = $elem.offset().top;
   var elemBottom = elemTop + $elem.height();

   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$.fn.toggle2classes = function (class1, class2) {
   if (!class1 || !class2)
      return this;

   return this.each(function () {
      var $elm = $(this);

      if ($elm.hasClass(class1) || $elm.hasClass(class2))
         $elm.toggleClass(class1 + ' ' + class2);

      else
         $elm.addClass(class1);
   });
};

//On Click functions
$('.speaker__photo').click(function(){
   $('.modal-content').html('');
   $(this).parent().clone().appendTo(".modal-content");
   $('.modal-overlay, .modal').toggleClass('active');
});

$('.close-modal').click(function(){
   $('.modal-overlay, .modal').toggleClass('active');
});

$('.goTo').click(function (e) {
   e.preventDefault();
   var target = $($(this).attr('href'));

   $('.menu__item').removeClass('active');
   $(this).addClass('active');

   if (target.length) {

      if(windowWidth <= breakPoint){
         var scrollTo = target.offset().top - 60;
      } else {
         var scrollTo = target.offset().top - 100;
      }

      $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
   }
});

$('.mobBt, .rkod__nav__item').click(function () {
   $('.rkod__nav').toggle2classes('active', 'inactive');
   $('.mobBt').toggleClass('active');
});

$('.one').on('click', function () {
   $('p').get(0).scrollIntoView({
      block: "start",
      behavior: "smooth"
   });
});

//On resize functions
$(window).resize(function () {
   
   if ($(window).innerWidth() <= breakPoint) {
      $('.nrk_header .wrapper > .nrk_header__user').appendTo($(".navmob__welcome"));
   }

   if ($(window).innerWidth() > breakPoint) {
      $('.menu').removeClass('active');
      $('.menu').removeClass('inactive');
   }

});

//Scroll functions
$(window).scroll(function () {
   var scTop = $(window).scrollTop();
   if (scTop >= 60) {
      $(".mobMenu").addClass("fixed");
      $("header > .wrapper").addClass("active");
      $(".logo_menu").addClass("hide");
      $(".logo_menu_red").removeClass("hide");
   } else {
      $(".mobMenu").removeClass("fixed");
      $("header > .wrapper").removeClass("active");
      $(".logo_menu").removeClass("hide");
      $(".logo_menu_red").addClass("hide");
   }
   
   /*
   if(isScrolledIntoView($('.numbers')) &&  !$('.numbers').hasClass('active')) {
      $('.numbers').addClass('active');
      $('.numbers__num span').each(function () {
         $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
         }, {
               duration: 5000,
               easing: 'swing',
               step: function (now) {
                  $(this).text(Math.ceil(now));
               }
            });
      });
   }
   */

});

//Ready functions
$(document).ready(function () {
   
});

//On Load functions
$(window).on('load', function () {
   
});
