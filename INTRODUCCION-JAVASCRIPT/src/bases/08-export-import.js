import  heroes  from "../data/heroes";
 

export const getHeroeById = (id) => heroes.find( (h) => h.id === id);

//console.log( getHeroeById(2) );

export const getHeroeByOwner = (owner) => heroes.filter( h => h.owner === owner);

//console.log( getHeroeByOwner("DC") );
