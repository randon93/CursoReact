import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import PrimeraApp from '../PrimeraApp';

describe('Test de mi PriemeraApp', () => {

    test('debe de mostrar el mensaje', () => {
        const saludo = 'hola soy goku';
        const wrapper = render( <PrimeraApp value='HOLA SOY GOKU'/>);
    })
    
});