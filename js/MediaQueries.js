class MediaQueries {
	static implementaQuerieJS(scrollMissao, scrollDigital, scrollServicos, scrollRodape) {

		this._scrollMissao = scrollMissao;
		this._scrollDigital = scrollDigital;
		this._scrollServicos = scrollServicos;
		this._scrollRodape = scrollRodape;

		const missao = $('.active');
		const digital = $('.digital');
		const servicos = $('.servicos');
		const rodape = $('.nav_rodape');
			
		if(!x.Matches) {
				missao	
					.click(()=>{$('html, body')
					.animate({scrollTop: scrollMissao}, 600);});

				digital
					.click(()=>{$('html, body')
					.animate({scrollTop: scrollDigital}, 600);});

				servicos
					.click(()=>{$('html, body')
					.animate({scrollTop: scrollServicos}, 600);});

				rodape
					.click(()=>{$('html, body')
					.animate({scrollTop: scrollRodape}, 600);});
		}
		var x = window.matchMedia('(min-width: 1101px)');
		mediaQuerieTelaDesktop(x);
		x.addListener();
	}
}

