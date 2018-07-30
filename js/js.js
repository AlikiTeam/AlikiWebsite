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