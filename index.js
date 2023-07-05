'use strict'

function fecharMenu () {
    document.querySelector('.list-menu').style.display = 'none'
    document.querySelector('#ico-fechar').style.display = 'none'
    document.querySelector('#ico-abrir').style.display = 'block'
}

function abrirMenu () {
    document.querySelector('#ico-abrir').style.display = 'none'
    document.querySelector('.list-menu').style.display = 'flex'
    document.querySelector('#ico-fechar').style.display = 'block'
}