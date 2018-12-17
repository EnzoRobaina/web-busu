new fullpage('#fullpage', {
    licenseKey: null,
	//Menu lateral indicativo das paginas
    menu: '#myMenu',
    //#href que será mostrado na url ao entrar em uma seção
	anchors: ['Principal', 'Features', 'Sobre', 'Parcerias', 'Aplicação'],
    navigation: true,
    //Posição do menu lateral
    navigationPosition: 'right',
    //Legenda para as páginas, no menu lateral
	navigationTooltips: ['Principal', 'Features', 'Sobre', 'Parcerias', 'Aplicação'],
	showActiveTooltip: false,
    slidesNavigation: false,
    //Posição do menu do carousel
    slidesNavPosition: 'bottom',
    //Arrastar com o mouse ou dedo (Necessita de licenseKey)
    dragAndMove: true,
    //Loop nos slides do carousel
    loopHorizontal: true,
    //Velocidade de scroll
    scrollingSpeed: 700,
    //Scroll pelo teclado
    keyboardScrolling: true,
	//Setas direcionais passam slides do carousel
    controlArrows: true,
});