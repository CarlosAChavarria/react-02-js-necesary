// import { heroes } from './data/heroes';
// import { heroes } from "./data/heroes";

import { heroes } from "../data/heroes";

// console.log(heroes);

export const getHeoreById = (idValue) => {
    return heroes.find(hero => hero.id == idValue);
}

// const heroId = prompt("Numero de héroe:")
// console.log(`El heroe ${heroId} es:`);
// console.log(getHeoreById(heroId));

// console.log('Owner');
export const getHeroByOwner = (ownerValue) => {
    // return heroes.find(hero => hero.owner == ownerValue);
    return heroes.filter(hero => hero.owner === ownerValue);
}

// const heroOwner = prompt('Owner:')
// console.log(getHeroByOwner(heroOwner));