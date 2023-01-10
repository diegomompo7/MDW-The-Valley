let singer = 'Maluma';

function showSinger() {
 console.log('in function ' + singer);
}

showSinger();
console.log('out function ' + singer);

// DECLARACIÓN LOCAL
// Función
function showSinger() {
 let singer = 'Maluma';
 console.log('in function ' + singer);
}

showSinger();
console.log('out function ' + singer); //error

let x;
x = 'global value';
function foo() {
    let x;
  console.log(x); 
    x = 'local value';
    console.log(x); 
} 
foo();

let a = 'Hola'
function global(){
    let b = ' Don ';
    function local(){
        let c = 'Pepito';
        return a+b+c;
    }
    return local;
}

//para llamar a esta última sentencia hacemos esto
let clousure = global();
console.log(clousure());