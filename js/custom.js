(function($){
	'use strict';
	$(document).ready(function() {
		/*--------- atalhos para as seções em tela Desktop  ------------*/
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
		
		/*--------- atalhos para as seções em tela até 600px ------------*/

		function mediaQuerie(x){
	
				$('.active').click(function(){
					$('html, body').animate({scrollTop: 330}, 600);
				});
				$('.digital').click(function(){
					$('html, body').animate({scrollTop: 1000}, 600);
				});
				$('.servicos').click(function(){
					$('html, body').animate({scrollTop: 2500}, 600);
				});
				$('.nav_rodape').click(function(){
					$('html, body').animate({scrollTop: 5000}, 600);
				});
		}

		var x = window.matchMedia('(max-width: 600px)');
		mediaQuerie();
		x.addListener(mediaQuerie);

		$('.navegacao-itens-lista').click(function(){
			$('.checkbtn').click();
			
		});

	});
}(jQuery));