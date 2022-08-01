'use strict';

const persona = {
    name: 'Carlos',
    age: '24',
    direction: {
        street: 4,
        colonia: 'Olivo 1',
        cp: 54110,
    },
}

console.log( persona );
console.table( persona );

console.log('Asignación de referencia');
const persona2 = persona;
console.log( 'persona2', persona2 );
persona.name = 'Alberto';
console.log( 'persona2 nuevo nombre', persona2 );
console.log( 'persona', persona );

console.log('Correcta asignación ');
const persona3 = { ...persona };
persona3.name = 'Jose'
console.log( 'persona3', persona3 );
console.log( 'persona', persona );