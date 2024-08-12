import { filterData, sortData, computeStats} from '../test/dataFunctions.js';
import { data as fakeData } from './data.js';
console.log(fakeData);

describe("filterData", () => {
  it("returns `filterData`", () => {
    console.log("fakeData:", fakeData);
    const gender = filterData(fakeData, "gender", "Hembra");
    expect(gender.length).toBe(1);
  });
  it("returns `filterData`", () => {
    const species = filterData(fakeData, "speciesGroup", "Domestico");
    expect(species.length).toBe(1);
  });
  it("returns `filterData`", () => {
    const film = filterData(fakeData, "filmGenre", "Drama");
    expect(film.length).toBe(1);
  });
  it("returns `filterData`", () => {
    const film = filterData(fakeData, "filmGenre", "Musical");
    expect(film.length).toBe(2);
  });
});

describe("sortData", () => {
  it("returns `sortData`", () => {
    const orderAsc = sortData(fakeData, "name", "ascendente");
    expect(orderAsc[0].name).toBe("Figaro");
  });
  it("returns `sortData`", () => {
    const orderDesc = sortData(fakeData, "name", "descendente");
    expect(orderDesc[1].name).toBe("Pascal");
  });
});

describe("computeStats", () => {
  it("Retorna el porcentaje de hembras", () => {
    const calculoHembras = computeStats(fakeData, "Hembra").hembras;
    expect(calculoHembras).toEqual(33);
  });
  it('Retorna el porcentaje de grupo de especie "domesticos" ', () => {
    const calculoEspecie = computeStats(fakeData, "Domestico").especies;
    expect(calculoEspecie).toEqual(33);
  });
  it('Retorna el porcentaje de genero de pelicula "fantasia"', () => {
    const calculoEspecie = computeStats(fakeData, "Fantasía").peliculas;
    expect(calculoEspecie).toEqual(67);
  });
});