$(window).on('scroll',function() {
	if($(window).scrollTop()){
		$('nav').addClass('white');
		console.log($('.amenu'))
		$('.amenu').css({
			color: 'black',
		});

	}
	else{
		$('nav').removeClass('white');
		$('.amenu').css({
			color: '#fff',
		});
	}
});




$(document).ready(function(){
	$('.customer-logos').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 3
			}
		}]
	});
});

new WOW().init();

var a=0;
$(window).scroll(function(){
	var oTop = $('#nav').offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop){
		$('.count').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
		a=1;
	}
});