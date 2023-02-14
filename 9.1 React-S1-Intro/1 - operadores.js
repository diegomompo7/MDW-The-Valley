let isLoggedIn = true;
let user = isLoggedIn && "John Doe";
console.log(user); // "John Doe"

isLoggedIn = false;
user = isLoggedIn && "John Doe";
console.log(user); // false

let errorMessage = null;
let message = errorMessage || "No hay errores";
console.log(message); // "No hay errores"

errorMessage = "Ha ocurrido un error";
message = errorMessage || "No hay errores";
console.log(message); // "Ha ocurrido un error"

let name = "John";
let displayName = name ?? "Desconocido";
console.log(displayName); // "John"

let age;
let displayAge = age ?? 25;
console.log(displayAge); // 25