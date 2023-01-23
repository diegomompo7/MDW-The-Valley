console.log('mensaje 1');

setTimeout(function () {
    console.log('mensaje 2');
}, 0);

const promise = new Promise(function(resolve) {
    console.log("mensaje promesa 1");
    resolve('mensaje promesa 2')
});

promise.then((value) => console.log(value))

console.log('mensaje 3');