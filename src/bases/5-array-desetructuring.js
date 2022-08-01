"use_strict";

const personajes = ["goku", "vegeta", "gohan"];

const [,, val3] = personajes;
console.log(val3);

const state = (value) => {
    return [value, () =>{ console.log("Hola desde función como valor del array") }];
}

const [valor, mensaje] = state(5);

console.log("valor extraido: ", valor);
mensaje();