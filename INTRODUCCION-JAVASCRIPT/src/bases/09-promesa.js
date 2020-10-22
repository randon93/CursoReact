import { getHeroeById } from "../bases/08-export-import";

export const getHeroeByIdAsync = (id) => {
    
    return new Promise( (resolved, reject) => { 
        setTimeout( () => {
            const h = getHeroeById(id);
            if(h) {
                resolved(h);
            }
            else {
                reject("Heroe no existe");
            }
            
        }, 1500);
    });
}

