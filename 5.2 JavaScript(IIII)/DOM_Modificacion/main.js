elementoHijo.textContent = 'Esto es un H1';
element.setAttribute('src', url);
element.style.display = 'none';
//element.classList.add()
elementoHijo.classList.add('bold-text', 'red-text');

//element.classList.remove()
elementoHijo.classList.remove('bold-text');

//element.classList.add()
elementoHijo.classList.toogle('visible');

//element.classList.contains()
elementoHijo.classList.contains('visible');

// attributes: Nos devuelve el objeto con los atributos que posee un nodo
elemento.attributes

// className: Para conocer o cambiar el nombre de la clase
elemento.className

// classList: Listado de clases
elemento.classList

// id: Para conocer el id
elemento.id

// parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling: Para conocer elementos padres e hijos
elemento.childNodes

// tagName: Devuelve la etiqueta HTML
elemento.tagName