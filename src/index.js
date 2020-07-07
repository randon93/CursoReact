
import { getHeroeById } from "./bases/08-export-import";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//        // reject("No se encontro el heroe");
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log("El heroe es ", heroe);
// })
//     .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {
    
    return new Promise( (resolved, reject) => { 
        setTimeout( () => {
            const h = getHeroeById(id);
            if(h) {
                resolved(h);
            }
            else {
                reject("Heroe no existe");
            }
            
        }, 2000);
    });
}

getHeroeByIdAsync(2)
    .then(console.log)
    .catch( console.warn);