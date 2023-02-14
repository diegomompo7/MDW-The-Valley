// OPERADOR ||
console.log(false || {}); // DA {} porque el primero es falso y el OR en ese caso siempre mira el 2º argumento
console.log("string" || true); // devuelve string porque coge el primer OR.
console.log([] || 100); // devuelve [] porque coge el primer OR.
console.log(null || "Prueba"); // Devuelve prueba porque el primer valor es null y con el OR coge el segundo argumento
console.log("" || true); //Duelve true porque cuando hay un array vacio y true siempre devuelve true
console.log(undefined || false);  //Duelve false porque cuando hay un undefined o null y un false siempre devuelve false

// Operador &&
console.log(false && {}); //Devuelve false porque false es igual que el string
console.log("string" && true); //Devuelve true porque es igual con el string
console.log([] && 100); 
console.log(null && "Prueba"); // Devuelve null porque no es igual el null que el string relleno
console.log("" && true); // No devuelve nada por no es igual el arrtay vacío y el null
console.log(undefined && false); //devuelve undefined porque no es igual

// Operador ??
console.log(false ?? {});
console.log("string" ?? true); // Devuelve un string porque detetca y el string es verdadero o no
console.log([] ?? 100); //
console.log(null ?? "Prueba"); // Devuelve null porque no es un array vaciio
console.log("" ?? true); // Devuelve un array vacío porque es verdadero
console.log(undefined ?? false); //