var breakPoint = 850;

const data = {
   "content": [
       {
           "type": "OnDemandWithoutPlan",
           "type_description": "Recarga avulsa",
           "postage_services": [
               {
                   "name": "SEDEX",
                   "final_cost": 25.00,
                   "variation": -5.00
               },
               {
                   "name": "PAC",
                   "final_cost": 15.00,
                   "variation": -5.00
               }
           ]
       },
       {
           "type": "OnDemandWithPlan",
           "type_description": "Plano mensal",
           "postage_services": [
               {
                   "name": "SEDEX",
                   "final_cost": 23.00,
                   "variation": -7.00
               },
               {
                   "name": "PAC",
                   "final_cost": 13.00,
                   "variation": -7.00
               }
           ]
       },
       {
           "type": "Standard",
           "type_description": "Balcão",
           "postage_services": [
               {
                   "name": "SEDEX",
                   "final_cost": 30.00,
                   "variation": 0.00
               },
               {
                   "name": "PAC",
                   "final_cost": 20.00,
                   "variation": 0.00
               }
           ]
       }
   ],
   "status": "OK",
   "messages": []
}



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
$('button').click(function () { 
   calcSmlt();
});

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
   console.log(smlt.simulate(25,30,15,45,32,15));

   calcSmlt = function(){
      //Form input
      let originZipcode = $('#originZipcode').val();
      let destinationZipCode = $('#originZipcode').val();
      let boxWeight = $('#boxWeight').val();
      let boxWidth = $('#boxWidth').val();
      let boxHeight = $('#boxHeight').val();
      let boxLength = $('#boxLength').val();

      //Data values
      let valPacUniteCharge = `R$ ${data.content[0].postage_services[1].final_cost},00`;
      let valPacMonthlyPlan = `R$ ${data.content[1].postage_services[1].final_cost},00`;
      let valPacBalconyPlan = `R$ ${data.content[2].postage_services[1].final_cost},00`;
      let valSedexUniteCharge = `R$ ${data.content[0].postage_services[0].final_cost},00`;
      let valSedexMonthlyPlan = `R$ ${data.content[1].postage_services[0].final_cost},00`;
      let valSedexBalconyPlan = `R$ ${data.content[2].postage_services[0].final_cost},00`;

      //Table cells
      let tabPacUniteCharge = document.querySelector('.tr_pac td[data-title="Recarga Avulsa"]');
      let tabPacMonthlyPlan = document.querySelector('.tr_pac td[data-title="Plano Mensal"]');
      let tabPacBalconyPlan = document.querySelector('.tr_pac td[data-title="Custo de Balcão do Frete"]');
      let tabSedexUniteCharge = document.querySelector('.tr_sedex td[data-title="Recarga Avulsa"]');
      let tabSedexMonthlyPlan = document.querySelector('.tr_sedex td[data-title="Plano Mensal"]');
      let tabSedexBalconyPlan = document.querySelector('.tr_sedex td[data-title="Custo de Balcão do Frete"]');

      //Insert data
      tabPacUniteCharge.innerHTML = valPacUniteCharge;
      tabPacMonthlyPlan.innerHTML = valPacMonthlyPlan;
      tabPacBalconyPlan.innerHTML = valPacBalconyPlan;
      tabSedexUniteCharge.innerHTML = valSedexUniteCharge;
      tabSedexMonthlyPlan.innerHTML = valSedexMonthlyPlan;
      tabSedexBalconyPlan.innerHTML = valSedexBalconyPlan;


      //console.log(smlt.simulate(originZipcode,destinationZipCode,boxWeight,boxWidth,boxHeight,boxLength));
   };

   
   
});

//On Load functions
$(window).on('load', function () {
   
});

