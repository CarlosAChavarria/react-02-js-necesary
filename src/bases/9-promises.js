'use-strict';

import { getHeoreById, getHeroByOwner } from "./bases/8-imports-and-exports";

console.log("Manejo de promesas");

// console.log("Promesas sin uso de valores externos");
// const promesaHeroes = new Promise((resolve, reject) => {

//     setTimeout(()=> {
//         console.log('hola mundo')
//         const heroe = getHeoreById(2);
//         resolve(heroe);
//         // reject("No se encontró al heroe");
//     }, 2000);

// });

// promesaHeroes.then((result) => {
//     console.log("Then o resolve 2 de la promesa");
//     console.log("El héroe es: ", result);
// }).catch((error) => {
//     console.log("Catch o reject de la promesa");
//     console.log(error);
// })

////////////////////////////////////

console.log("Promesas que reciben valores para trabajar con ellos");

const getHeoreByIdAsyn = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(()=> {
            const heroe = getHeoreById(12);
            if (heroe) {
                resolve(heroe);
            } else {
                reject("No se encontró al heroe");
            }
        }, 2000);
    
    })
}

getHeoreByIdAsyn(2).then((resolve) => {
    console.log(resolve);
}).catch((error) => {
    console.log(error);
})