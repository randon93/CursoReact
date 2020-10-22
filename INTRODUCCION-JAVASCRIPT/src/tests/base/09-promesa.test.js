import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../bases/09-promesa";
import heroes from "../../data/heroes";

describe("PRUEBA CON PROMESAS", () => {
  test("promesa correcta ", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("promesa correcta ", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("Heroe no existe");
      done();
    });
  });
});
