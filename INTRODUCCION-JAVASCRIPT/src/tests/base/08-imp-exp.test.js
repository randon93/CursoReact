import "@testing-library/jest-dom";
import { getHeroeById, getHeroeByOwner } from "../../bases/08-export-import";
import heroes from "../../data/heroes";

describe("Prueba de 08-exp-imp", () => {
  test("should ", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === heroe.id);
    expect(heroeData).toEqual(heroe);
  });

  test("Retorna undefined ", () => {
    const id = 25;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test("Retorna por OWNER DC", () => {
    const owner = "DC";
    const listHeroes = getHeroeByOwner(owner);
    expect(listHeroes).toEqual(getHeroeByOwner(owner));
  });

  test("Retorna por OWNER Marvel", () => {
    const owner = "Marvel";
    const listHeroes = getHeroeByOwner(owner);
    expect(listHeroes.length).toBe(2);
  });
});
