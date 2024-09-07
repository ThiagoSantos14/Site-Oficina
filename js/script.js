//Script MenuDrop
const logoTipo = document.querySelector('.logotipo');
const navBar = document.querySelector('.navBar');
const btnMenu = document.querySelector('#iconMenu');
const btnClose = document.querySelector('#iconClose');

function exibir() {
    logoTipo.style.width = '150px';
    navBar.classList = 'displayNavOn';
    btnMenu.style.display = 'none';
    btnClose.style.display = 'block';
    btnClose.style.fontSize = '3rem';
}

function ocultar() {
    logoTipo.style.width = '300px';
    navBar.classList = 'displayNavOff';
    btnMenu.style.display = 'block';
    btnClose.style.display = 'none';
}



//Script Efeito dos cards do topo
const btnSaiba1 = document.querySelector('.btnSaiba-1');
const btnSaiba2 = document.querySelector('.btnSaiba-2');
const btnSaiba3 = document.querySelector('.btnSaiba-3');
const btnSaiba4 = document.querySelector('.btnSaiba-4');

const textoCardTopo1 = document.querySelector('.textoCardTopo1');
const textoCardTopo2 = document.querySelector('.textoCardTopo2');
const textoCardTopo3 = document.querySelector('.textoCardTopo3');
const textoCardTopo4 = document.querySelector('.textoCardTopo4');

function exibirTexto1() {
    textoCardTopo1.classList = 'displayCardOn';
}

function ocultarTexto1() {
    textoCardTopo1.classList = 'displayCardOff';
}

function exibirTexto2() {
    textoCardTopo2.classList = 'displayCardOn';
}

function ocultarTexto2() {
    textoCardTopo2.classList = 'displayCardOff';
}

function exibirTexto3() {
    textoCardTopo3.classList = 'displayCardOn';
}

function ocultarTexto3() {
    textoCardTopo3.classList = 'displayCardOff';
}

function exibirTexto4() {
    textoCardTopo4.classList = 'displayCardOn';
}

function ocultarTexto4() {
    textoCardTopo4.classList = 'displayCardOff';
}
