import { getSaludo } from "../../bases/02-template-String";
import "@testing-library/jest-dom";

describe('Pruebas en 02-template-string.js', () => {

    test('prueba en el metodo getsaludo con parametro', () => {
        const nombre = 'Brandon';
        const saludo = getSaludo( nombre );
        expect( saludo ).toBe('hola ' + nombre);
    });
    
    test('prueba en el metodo getSaludo sin parametro', () => {        
        const saludo = getSaludo();
        expect( saludo ).toBe('hola Javier')
    });
    
});