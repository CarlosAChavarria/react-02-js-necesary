'use strict';

console.log('Problema con la reasignación');

// function saludar(nombre) {
//     return `Hola ${nombre}`;
// }

// saludar = 20;

// console.log( saludar );
// console.log(saludar('carlos'));

const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

// saludar = 20;

console.log( saludar );
console.log(saludar('carlos'));

console.log('funciones flecha');

const getActiveUser = ( userName ) => (
    {
        id: 'asfSD544',
        userName
    }
)

console.log( getActiveUser('Carlos') );