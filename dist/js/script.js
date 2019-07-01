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

$('.rkod__faq__item').click(function(){
   $('.rkod__faq__item').removeClass('active');
   $(this).toggleClass('active');
});

$('.goTo').click(function (e) {
   e.preventDefault();
   var target = $($(this).attr('href'));

   $('.menu__item').removeClass('active');
   $(this).addClass('active');

   if (target.length) {

      if($(window).innerWidth() <= breakPoint){
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

   var smlt = new Simulator();
   console.log(smlt.simulate(1651,51651,651651,651651,651651,651651));

   calcSmlt = function(){
      var originZipcode = $('#originZipcode').val();
      var destinationZipCode = $('#originZipcode').val();
      var boxWeight = $('#boxWeight').val();
      var boxWidth = $('#boxWidth').val();
      var boxHeight = $('#boxHeight').val();
      var boxLength = $('#boxLength').val();

      console.log(smlt.simulate(originZipcode,destinationZipCode,boxWeight,boxWidth,boxHeight,boxLength));
   };

   //console.log(smlt.simulate(516561,51551615,1651515,51516551,56151651651,5615616551));
});

//On Load functions
$(window).on('load', function () {

});
