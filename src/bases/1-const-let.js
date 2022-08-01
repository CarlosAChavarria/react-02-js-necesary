'use strict';
console.log('hola mundo');

const firstName = "Carlos";
let edad = 22;
const prueba = 'hola';
let pruebaDeAmbitoSuperior = 0;

console.log(prueba ,firstName, edad);

if(true){
    const prueba = "mundo";
    const name = "Alberto";
    let edad = 24;
    console.log(name, edad);
    console.log(pruebaDeAmbitoSuperior);
    pruebaDeAmbitoSuperior = 5;
    console.log(pruebaDeAmbitoSuperior);
}

edad = 23;
console.log(edad);