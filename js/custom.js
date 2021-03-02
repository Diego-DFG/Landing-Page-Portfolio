(function($){
	'use strict';
	$(document).ready(function() {
								
		var $doc = $('html, body');
		$('.scrollSmooth').click(function() {
			$('.checkbtn').click();
		    $doc.animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 500);

		    return false;
		});
	});

}(jQuery));