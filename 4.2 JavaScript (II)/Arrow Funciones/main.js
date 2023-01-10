// Podemos también omitir el return y hacerlo en una línea
let getAge = () => 31;

let age = getAge();
console.log(age);

// Podríamos devolver un objeto inline
let getTeacher = () => ({name:'Edu', age:31});
console.log(getTeacher());

let getAge2 = () => {
    let message = 'Tengo 30 años';
    return message;
};

let age2 = getAge2();
console.log(age2);

// Nuestra primera función arrow
let ageMessage = age => {
    return 'Hola, tengo ' + age;
  };
  
  console.log(ageMessage(19));

let getSum = (a,b) => a + b ;
let sum = getSum(3,10);
console.log(sum);