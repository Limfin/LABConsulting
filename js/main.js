$(function () {
	//Preloader
	var $preloader = $('#page-preloader'),
    	$spinner   = $preloader.find('.spinner');
   	$spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
	// плавное перемещение страницы к нужному блоку
	$('.trust__btn').click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr('href');
		destination = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: destination }, 800);
	});
	// Modal Window
	$('.btn-call').click(function (e) {
		e.preventDefault();
		$('#modal-window').arcticmodal({
			overlay: {
				css: {
					backgroundColor: '#131731',
					opacity: .93
				}
			}
		});
	});
	// Menu hamburger
	$('.navigation__bars').click(function () {
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
		$('.menu').toggleClass('menu-opened');
		$('.btn-collapse').toggleClass('btn-collapse-opened');
		$('.navigation__btn').toggleClass('btn-opened');
		$('navigation__bars').toggleClass('navigation__bars_opened');
	});
	//Slider
	 $('.feedbacks__carousel').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
  });
});




