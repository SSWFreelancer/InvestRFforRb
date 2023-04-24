$(document).ready(function (event) {
	 $('.heading__button-head.dropbtn').click(function (event) {
	 	$('.dropdown-content').not(("#"+$(this).attr('data-idmyDrop')+"")).removeClass('show');
	 	$("#"+$(this).attr('data-idmyDrop')+"").toggleClass('show').toggleClass('mobileshow');
	 	$(this).toggleClass('opened');
   });
    $('.work__checkbox input').change(function (event) {
      if($(this).is(':checked')){
         $('.work__cards').removeClass('target');
         $(".work__cards[data-id=" + $(this).attr('id')+"]").addClass('target');
      }
   });

});

$(document).click( function(e){ // событие клика по веб-документу
   var div = $( ".heading__button" ); // тут указываем ID элемента
   if ( !div.is(e.target) && div.has(e.target).length === 0 ) { 
      $( ".dropdown-content" ).removeClass('show')
   }
});


$(document).ready(function (event) {

   $('.maybe__navwrap>img:last-child').click(function (event) {  
      var navsliderpos = $(this).parent().find('.maybe__navslider').scrollLeft();
      $(this).parent().find('.maybe__navslider').scrollLeft(navsliderpos + $(this).parent().find('.maybe__navslider>img').width() + 12);
   });  
   $('.maybe__navwrap>img:first-child').click(function (event) {  
      var navsliderpos = $(this).parent().find('.maybe__navslider').scrollLeft();
      $(this).parent().find('.maybe__navslider').scrollLeft(navsliderpos - $(this).parent().find('.maybe__navslider>img').width() - 12);
   });  
   $('.maybe__navslider>img').click(function (event) {  
      $('.maybe__navslider>img').removeClass('current');
      $(this).addClass('current');
      $('.maybe__slider').slick('slickGoTo', $(this).index());
      var forslider = $(window).width() - $('.main__container').width();
      if($(this).offset().left - forslider/2>500){
         $('.maybe__navslider').scrollLeft($(this).offset().left - forslider/2 + $('.maybe__navslider').scrollLeft() - $('.maybe__navslider').width()/2 + 70);
      }else if($(this).offset().left - forslider/2<100){
         $('.maybe__navslider').scrollLeft($(this).offset().left - forslider/2 + $('.maybe__navslider').scrollLeft() - $('.maybe__navslider').width()/2 + 70 );
      }
   });  
   $('.maybe__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      var numberslide = currentSlide + 1;
      $('.maybe__navslider>img.current').removeClass('current');
      $('.maybe__navslider>img:nth-child('+numberslide+')').addClass('current');

      var forslider = $(window).width() - $('.maybe__container').width();
      if( $('.maybe__navslider>img.current').offset().left - forslider/2>500){
         $('.maybe__navslider').scrollLeft( $('.maybe__navslider>img.current').offset().left - forslider/2 + $('.maybe__navslider').scrollLeft() - $('.maybe__navslider').width()/2 + 70);
         if( $('.maybe__navslider>img.current').offset().left - forslider/2 + $('.maybe__navslider').scrollLeft() < 10){
            $('.maybe__navwrap>img:first-child').addClass('hide');
         }else{
            $('.maybe__navwrap>img:first-child').removeClass('hide');
         }
      }else if( $('.maybe__navslider>img.current').offset().left - forslider/2<100){
         $('.maybe__navslider').scrollLeft( $('.maybe__navslider>img.current').offset().left - forslider/2 + $('.maybe__navslider').scrollLeft() - $('.maybe__navslider').width()/2 + 70 );
         if( $('.maybe__navslider>img.current').offset().left - forslider/2 + $('.maybe__navslider').scrollLeft() < 10){
            $('.maybe__navwrap>img:first-child').addClass('hide');
         }else{
            $('.maybe__navwrap>img:first-child').removeClass('hide');
         }
         
      }
   });

   if($('.maybe__slider').length>0){
      $('.maybe__slider').slick({
         arrows: false,
         fade:true,
         slidesToShow: 1,
         infinite:false,
         responsive: [
            {
            breakpoint: 1024,
               settings: {
               	slidesToShow: 1.1,
               	fade:false,
               	dots:true,
               }
            },
         ]         
      });
   }
   $('.maybe__image').addClass('ready');
    $('.maybe__video>video').click(function(event){
		if ($(this).get(0).paused) {
			$(this).get(0).play();
         $(this).next().addClass('remove');
		} else {
			$(this).get(0).pause();
         $(this).next().removeClass('remove');
		}
    });
   $('.maybe__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      if($('.maybe__video').length > 0){
         if(!$('.maybe__video').hasClass('slick-current')){
            $('.maybe__video').find('video').get(0).pause();
            $('.maybe__video').find('video').next().removeClass('remove');
         }
      }

   });
});

function menuFunction(){document.getElementById("menuBox").classList.toggle("active"),document.getElementById("hamburgerMenu").classList.toggle("active");} 
