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
