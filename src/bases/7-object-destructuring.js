'use-strict';

console.log('Desestructuración de objetos');

const persona = {
    firstName: "carlos",
    age: 24,
    title: "developer"
}

const data = ({ age, title, firstName, range = "junior" }) => {
    console.log(`${firstName} ${range}`);

    return {
        alias: firstName,
        cargo: title,
        type: {
            device: "web",
            type: "frontend"
        }
    }
};

console.log('Imprimiendo la función');
data(persona)

console.log('Imprimiendo la función asignada a una variable');
const worker = data(persona);
const { alias, cargo, type: { type } } = worker;

console.log(alias, cargo, type);