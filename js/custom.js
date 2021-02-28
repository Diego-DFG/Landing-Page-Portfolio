(function($){
	'use strict';
	$(document).ready(function() {
		$('.active').click(function(){
			$('html, body').animate({scrollTop: 900}, 600);
		});
		$('.digital').click(function(){
			$('html, body').animate({scrollTop: 1800}, 600);
		});
		$('.servicos').click(function(){
			$('html, body').animate({scrollTop: 2300}, 600);
		});
		$('.nav_rodape').click(function(){
			$('html, body').animate({scrollTop: 4500}, 600);
		});
		$('.navegacao-itens-lista').click(function(){
			$('.checkbtn').click();
			
		});
	});
}(jQuery));