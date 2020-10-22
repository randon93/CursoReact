import "@testing-library/jest-dom";
import { peticion } from "../../bases/11-Await-and-Async";


describe("Test 11-Await-and-Async", () => {
  test('Debe retornar informacion de un cliente "BCP"', async () => {
    const cliente = await peticion();
    expect(cliente.estado).toBe("ACTIVO");
  });
});
