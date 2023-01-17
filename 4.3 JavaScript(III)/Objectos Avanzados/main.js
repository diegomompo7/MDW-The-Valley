let item = 'zapatillas';

let shoppingCart = {
  [item + 'Adidas']: 10
};

console.log(shoppingCart.zapatillasAdidas);

function loginTeacher(name, password) {
  return {
    name: name,
    password: password
  };
}

let teacher = loginTeacher("Edu", 'TV2022');
console.log(teacher.name);

//Podríamos usar esto:

function loginTeacher(name, password) {
  return {
    name,
    password
  };
}

console.log(teacher.name);

//Incluso lo podemos combinar

function loginTeacher(name) {
  return {
    name: name,
    password: 'AAAA'
  };
}

loginTeacher("Edu");
console.log(teacher.name);

let shoppingCart2 = {
  zapatillas: 10,
};

console.log(shoppingCart2.zapatillas  === undefined);

console.log('zapatillas' in shoppingCart);
console.log('pantalones' in shoppingCart);