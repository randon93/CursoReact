import '@testing-library/jest-dom';
import { retornoArreglo } from '../../bases/07-destructurando-arreglos';

describe('Pruebas en 07-Desestructuracion', () => {

test('[] de String y Numero ', () => {
    const [letras, numeros] = retornoArreglo();
    expect( letras ).toBe( 'ABC');
    expect( numeros ).toBe( 123 );
    expect( typeof letras).toBe( 'string' );

});


});