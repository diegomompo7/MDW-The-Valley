window.onload = function(){ //Acciones tras cargar la página
    pantalla=document.getElementsByClassName("calculator__result")[0]; //elemento pantalla de salida
}

let valorAnterior = 0;
let valorActual = 0;

const numbersButtons = document.querySelectorAll(".button--operand");
const operatorsButtons = document.querySelectorAll('.button--operator');
const equalButtons = document.querySelectorAll('.button--equal');
const clearButtons = document.querySelectorAll('.button--clear');
let finalResult = 0;
let tipoOperator;

function imprimirValores(){
    console.log("valor actual: " + valorActual);
    console.log("valor anterior: " + valorAnterior);
}

function agregarNumero(numero){

    valorActual += numero;

    imprimirValores();
}

function computar(tipo){
    tipoOperator = tipo;
    console.log(tipoOperator);
    valorAnterior = parseFloat(valorActual);
    valorActual = 0;
}
function imprimir(op){
    valorActual = parseFloat(valorActual)
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
function reset(){
    pantalla.textContent = "";
    valorActual = 0;
    valorAnterior = 0;
    tipoOperator = null;

    console.log(valorActual, valorAnterior)
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
clearButtons.forEach(boton => {
    boton.addEventListener('click', () => reset(boton.value));
})