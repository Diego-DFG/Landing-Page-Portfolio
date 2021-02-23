(function($){
	"use strict";
	$(document).ready(function() {
		$(window).on('scroll', function() {
			if($(this).scrollTop() > 100) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		$('#back-to-top').click(function() {
			$('html, body').animate({scrollTop: 0}, 600);
			return false;
		});
	});
}(jQuery));