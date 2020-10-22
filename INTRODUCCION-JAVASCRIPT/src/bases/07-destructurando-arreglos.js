

const personajes = ["goku", "vegeta", "trunks"];

const [, p1, p2] = personajes;

// console.log(p2);

export const retornoArreglo = () => ["ABC", 123];
const [letras, numeros] = retornoArreglo();
// console.log(letras, numeros);

 const useState =  (valor) => [valor, ()=>{console.log("Hola perro")}];

 const [nombre, setNombre] = useState("Brandon");

//  console.log(nombre);
 setNombre();
 