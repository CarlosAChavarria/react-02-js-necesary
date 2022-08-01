'use strict'

const firstName = "Carlos";
console.log("template string");
const temp1 = ` hola mundo soy ${firstName} y tengo ${calcularEdad(1998)}`;
console.log(temp1);

function calcularEdad (birthday) {
    const currencyDate = new Date();
    const currencyYear = currencyDate.getFullYear();
    return currencyYear - birthday;
}