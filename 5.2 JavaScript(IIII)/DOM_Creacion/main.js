let elementoPadre = document.getElementById('containter');
let elementoHijo = document.createElement('h1');
let newText = document.createTextNode('HOLA');

elementoPadre.appendChild(elementoHijo);
elementoHijo.appendChild(newText)

let newText2 = document.createElement('h1');
newText2.innerHTML = 'AAAAA';

let a = elementoPadre.appendChild(newText2);

let newNode3 = document.createElement("span");
newNode3.innerHTML ='Soy una ';
let parentDiv = document.getElementById("parentElement");

let sp2 = document.getElementById("childElement");
parentDiv.insertBefore(newNode3, sp2);

parentDiv.insertAdjacentHTML('beforebegin', '<div><p>Holaaa</p></div>');

let newChildNode = document.createElement('h1');
newChildNode.innerHTML = 'AAA';
parentDiv.replaceChild(newChildNode, sp2);