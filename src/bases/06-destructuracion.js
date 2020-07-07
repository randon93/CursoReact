// Destructuracion

const persona = {
    nombre: "Javier",
    edad: 26,
    clave: "Kronk"
};

const { nombre, clave, edad} = persona;

// console.log(edad);

const retornarPersona = ({clave = "none", edad}) => (
    {
        nombreCalve: clave,
        anios: edad,
        direccion: {
            calle: 15,
            num: 42
        }
    }
);

const {nombreCalve, anios, direccion} = retornarPersona(persona);
const {calle} = direccion;

console.log(nombreCalve, anios);
console.log("direccion " + calle)