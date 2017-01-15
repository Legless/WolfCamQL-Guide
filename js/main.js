$(function () {

	// smooth scroll to id
	var href, top, scrollSpeed = 1000
	$('body').on('click', '.scroll-link', function () {
		href = $(this).attr('href');
		if ($(href).length) {
			top = $(href).offset().top;
			$('html, body').stop().animate({'scrollTop': top}, scrollSpeed);
		}
		return false;
	});
	

	// 
	$( '.carousel' ).slick( {

	} );
});
