const { frutas, dinero, println} = require('./thread');

console.log(dinero);

println();


let nombre = process.env.NOMBRE || 'Sebastian';
let web = process.env.WEB || 'No tengo web';

console.log(`Hola ${nombre} y mi página no existe ${web}`);