const apellido = "Garcia";
const nombre = "Brandon";

const nombreCOmpleto = `
${nombre}
${apellido}
 `;

console.log(nombreCOmpleto);

function getSaludo(nombre) {
    return "hola " + nombre
}

console.log(` ${getSaludo("Javier")}`)