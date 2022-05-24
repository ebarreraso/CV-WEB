'use strict'


//Ejecutar funcion el evento click
document.getElementById("btn_open").addEventListener('click', open_close_menu);
document.getElementById("huella").addEventListener('click', open_close_menu);

//Declarar variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");


//Evento para mostrar y ocultar menú


function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu_side_move");
}

//oculta menu al recargar la pagina si es menor a 760px
if(window.innerWidth < 760) {
    body.classList.add("body_move");
    side_menu.classList.add("menu_side_move");
}

window.addEventListener("resize", function(){

    if(window.innerHeight > 760){
        body.classList.remove("body_move");
        side_menu.classList.remove("menu_side_move");
    }

    if(window.innerWidth < 760){
        body.classList.add("body_move");
        side_menu.classList.add("menu_side_move");
    }
});