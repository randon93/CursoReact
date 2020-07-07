const persona = {
    nombre: "Daniela",
    apellido: "Hurtado",
    edad: 22,
    direccion: {
        calle: "falsa",
        num: "123"
    }
};


// ... para clonar objetos
const persona2 = { ...persona}
persona2.nombre = "Brandon"


console.table(persona)
console.table(persona2)