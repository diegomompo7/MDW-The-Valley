/*
    Introduciendo una etiqueta, seleccionará la primera que se encuentre, en este
    caso el primer h1.
*/
let element = document.querySelector('h1'); 

/*
    Introduciendo una clase, seleccionará la primera que se encuentre con ese 
    nombre, en este caso el segundo h1.
*/
let element2 = document.querySelector('.titulos-importantes'); 

/*
    Introduciendo un ID, seleccionará la primera que se encuentre con ese 
    nombre, en este caso el primer h1.
*/
let element3 = document.querySelector('#tituloPrincipal'); 

let element4 = document.querySelectorAll('h1'); 

let element5 = document.getElementById('tituloPrincipal'); 

let element6 = document.getElementsByClassName('titulos-importantes'); 

let element7 = document.getElementsByTagName('tituloPrincipal');

let element8 = document.getElementById('a');
let attribute = element8.getAttribute('href');

// Obtener los hijos de un elemento
let element9 = document.getElementById('id1');
let childNodes = element9.childNodes;

// Su nodo padre
let parentNode = element9.parentNode;