import "@testing-library/jest-dom";
import { getUsuario, usuario } from "../../bases/05-funciones";

describe("Pruebas de 05-Funciones", () => {

  test("Funtion usuario ", () => {
    const userTest = {
      nombre: "Brandon",
      apellido: "garcia",
    };
    const user = usuario();
    expect( user ).toEqual( userTest);
  });

  test('Funtion getUsuaio con trabajo DESARROLLADOR JUNIOR', () => {      
      const trabajo = 'Desarrollador Junios';
      const user = getUsuario(trabajo);
      expect( user.trabajo ).toEqual(trabajo);
  });
  
});
