(function($){
	'use strict';
	$(document).ready(function() {
		
		/*--------- Variáveis até 600px ------------*/
		let missaoTelaMedia = $('.active')
						.click(function(){$('html, body')
						.animate({scrollTop: 330}, 600);});
		let digitalTelaMedia = $('.digital')
						.click(function(){$('html, body')
						.animate({scrollTop: 1000}, 600);});
		let servicosTelaMedia = $('.servicos')
						.click(function(){$('html, body')
						.animate({scrollTop: 2500}, 600);});
		let rodapeTelaMedia = $('.nav_rodape')
						.click(function(){$('html, body')
						.animate({scrollTop: 5000}, 600);});
		/*------------------------------------------------------------------*/


		/*----------- Variáveis para desktop --------*/
		let missaoTelaDesktop = $('.active')
						.click(function(){$('html, body')
						.animate({scrollTop: 900}, 600);});
		let digitalTelaDesktop = $('.digital')
						.click(function(){$('html, body')
						.animate({scrollTop: 1800}, 600);});
		let servicosTelaDesktop = $('.servicos')
						.click(function(){$('html, body')
						.animate({scrollTop: 2300}, 600);});
		let rodapeTelaDesktop = $('.nav_rodape')
						.click(function(){$('html, body')
						.animate({scrollTop: 5000}, 600);});
		/*------------------------------------------------------------------*/



		/*------------ Variável de click botão check --------*/
		let clicaBotaoCheck = $('.navegacao-itens-lista')
								.click(function(){$('.checkbtn').click();});
		/*------------------------------------------------------------------*/



		/*------------ Variáveis da função -----------*/
		var x = window.matchMedia('(max-width: 600px)');
		var y = window.matchMedia('(min-width: 1100px)');
		/*------------------------------------------------------------------*/


		/* ------------- Função -----------------------*/

		function mediaQuerieTelaMedia(x){
			if(x.Matches) {
				missaoTelaMedia;
				digitalTelaMedia;
				servicosTelaMedia;
				rodapeTelaMedia;
			}
		}

		function mediaQuerieTelaDesktop(y){
			if(y.Matches) {
				missaoTelaDesktop;
				digitalTelaDesktop;
				servicosTelaDesktop;
				rodapeTelaDesktop;
			}
		}



		mediaQuerieTelaMedia(x);
		x.addListener(mediaQuerieTelaMedia);

		mediaQuerieTelaDesktop(y);
		y.addListener(mediaQuerieTelaDesktop);

		
		clicaBotaoCheck;

	});
}(jQuery));