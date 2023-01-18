window.onload = function(){ //Acciones tras cargar la página
    pantalla=document.getElementsByClassName("calculator__result")[0]; //elemento pantalla de salida
}

let valorAnterior = 0;
let valorActual = 0;

const numbersButtons = document.querySelectorAll(".button--operand");
const operatorsButtons = document.querySelectorAll('.button--operator');
const equalButtons = document.querySelectorAll('.button--equal');
let finalResult = 0;
let tipoOperator;

function imprimirValores(){
    console.log("valor actual: " + valorActual);
    console.log("valor anterior: " + valorAnterior);
}

function agregarNumero(numero){
    if(numero === '.' && valorActual.includes('.')){
        return;
    }
    valorAnterior = parseInt(valorActual);
    valorActual = parseInt(numero);
    imprimirValores();
}

function computar(tipo){
    tipoOperator = tipo;
    console.log(tipoOperator);
}
function imprimir(op){
    console.log(op);
    switch(op){
        case '+':
            finalResult = valorAnterior + valorActual;
        break;
        case '-':
            finalResult = valorAnterior - valorActual;
        break;
        case '*':
            finalResult = valorAnterior * valorActual;
        break;
        case '/':
            finalResult = valorAnterior / valorActual;
        break;
    }
    valorActual = finalResult;
    console.log(valorActual);
}

numbersButtons.forEach(boton => {
    boton.addEventListener('click', () => agregarNumero(boton.value));
    boton.onclick = function(e){
        pantalla.innerHTML = valorActual;
    }
})

operatorsButtons.forEach(boton => {
    boton.addEventListener('click', () => computar(boton.value));
})
equalButtons.forEach(boton => {
    boton.addEventListener('click', () => imprimir(tipoOperator));
    boton.onclick = function(e){
        pantalla.innerHTML = valorActual;
    }
})