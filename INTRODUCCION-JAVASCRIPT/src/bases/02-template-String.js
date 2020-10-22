const apellido = "Garcia";
const nombre = "Brandon";

const nombreCOmpleto = `
${nombre}
${apellido}
 `;

// console.log(nombreCOmpleto);

export function getSaludo(nombre = 'Javier') {
    return "hola " + nombre
}

// console.log(` ${getSaludo("Javier")}`)