//localStorage.setItem('usuario', 'edu');
//sessionStorage.setItem('usuario', 'edu');

console.log(localStorage.getItem('usuario'));
sessionStorage.getItem('usuario')

for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
  }

localStorage.user = JSON.stringify({name: "Edu", lastName: "Cuadrado"});

let user = JSON.parse( localStorage.user );
console.log( user.name ); 