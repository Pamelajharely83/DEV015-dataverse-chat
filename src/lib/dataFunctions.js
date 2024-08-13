export const filterData = (data, filterBy, value) => {
  /*if (filterBy === "filmGenre") {
    const filterGenre = data.filter((item) =>
      item.facts.filmGenre.includes(value) 
    );
    return filterGenre;
  }*/
 
  //Filtra la data si el personaje tiene este valor, si no  
  const dataFilter = data.filter((item) => item.facts[filterBy].includes(value));
  return dataFilter;
};

export const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === "name") {
    data.sort(function (a, b) {
      if (sortOrder === "ascendente") {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
      }
      if (sortOrder === "descendente") {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
      }
      return 0;
    });
    return data;
  }
};

export const computeStats = (data, value) => {
  const genero = data.reduce((contador, obj) => {
    if (obj.facts.gender === value) {
      contador += 1;
    }
    return contador;
  }, 0);
  const calculo_hembras = (genero / data.length) * 100;

  const especie = data.reduce((contador, obj) => {
    if (obj.facts.speciesGroup === value) {
      contador += 1;
    }
    return contador;
  }, 0);
  const calculo_especie = (especie / data.length) * 100;

  const pelicula = data.reduce((contador, obj) => {
    if (obj.facts.filmGenre.includes(value)) {
      contador += 1;
    }
    return contador;
  }, 0);
  const calculo_pelicula = (pelicula / data.length) * 100;

  return {
    genero: Math.round(calculo_hembras),
    especies: Math.round(calculo_especie),
    peliculas: Math.round(calculo_pelicula),
  };
};
