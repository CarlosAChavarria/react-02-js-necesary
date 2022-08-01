'use strict';

let array1 = [1,2,3,4];
console.log('array1', array1);
let array2 = array1;
array2.push(5);
console.log('array1', array1);
console.log('array2', array2);

let array3 = [ ...array1, 6];
console.log('array1', array1);
console.log('array3', array3);

console.log('asignación con map');
let array4 = array1.map(value => { return value });
console.log('array4', array4);