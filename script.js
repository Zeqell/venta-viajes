import { barcelona, roma, paris, londres } from "./ciudades.js";

//**Obtener elementos del DOM *//

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//**Agregar un evento CLICK */

enlaces.forEach( function(enlace){
    enlace.addEventListener('click', function(){
        //remover la clase "active" de todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        });
        //agregar clase "active" en el enlace actual
        this.classList.add('active')
        //agregar contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });
});

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    };
    return contenido [enlace];
}
