import data from "../data/dataset.js";
import { filterData, sortData, computeStats } from "../lib/dataFunctions.js";
import { renderItems } from "../components/cards.js";

const Home = (/* props */) => {
  const viewHome = document.createElement("div");
  viewHome.innerHTML = `<header>
      <div class="container">
        <div id="imagen-castillos-disney">
          <img id="castillo-disney" src="https://github.com/Susana-equihua/DEV015-dataverse/blob/main/Disney%20pets/castillo%20de%20disney%20-%20header.png?raw=true" alt="castillo-disney-brillos"> 
        </div>
        <div id="btn-and-text-header">
          <div clas="text-header">
            <h1>
              <img
                id="imgLogoDisney"
                src="https://raw.githubusercontent.com/Susana-equihua/DEV015-dataverse/main/Disney%20pets/logo%20disney.png"
                alt="DISNEY"
              />
              MASCOTAS
            </h1>
            <h2>¡BIENVENIDOS!</h2>
            <p id="parrafoBienvenidos">
              Descubre el mágico mundo de las mascotas de Disney. Conoce las
              historias, aventuras y datos curiosos de los adorables compañeros de
              tus personajes favoritos de Disney. Desde el valiente Maximus hasta
              el travieso Abu, ¡explora todo lo que hace especiales a estos
              encantadores animales!
            </p>
          </div>
          <a href="#mainContenidoPrincipal" id="btnConocelos"
            >¡Quiero conocerlos!</a
          >
        </div>
      </div>
    </header>
    <main id="mainContenidoPrincipal">
      <div class="container">
        <nav>
          <div id="barra-filtro-ordenar">
            <div id="div-filtro">
              <button id="btn-filter">
                <i class="fas fa-bars filter-icon"></i>
              </button>
              <label for="filter" class="label-filtro"
                >Filtros de búsqueda</label
              >
            </div>
            <div id="div-ordenar">
              <button id="btnUp">
                <i class="fa-solid fa-arrow-up-a-z"></i>
              </button>
              <button id="btnDown">
                <i class="fa-solid fa-arrow-down-z-a"></i>
              </button>
              <label id="label-ordenar">Ordenar</label>
            </div>
            <button id="btn-stats">¿Sabías qué...?</button>
          </div>
        </nav>
        <aside>
          <div class="container">
            <div class="div-select">
              <label class="label" for="gender-select">Género:</label>
              <select
                name="genero"
                id="gender-select"
                data-testid="select-filter"
              >
                <option value="" disable selected hidden>
                  Elige una opción
                </option>
                <option value="Hembra">Hembra</option>
                <option value="Macho">Macho</option>
              </select>
            </div>
            <div class="div-select">
              <label class="label" for="specie-select">Tipo de mascota:</label>
              <select
                name="speciesGroup"
                id="specie-select"
                data-testid="select-filter"
              >
                <option value="" disable selected hidden>
                  Elige una opción
                </option>
                <option value="Aves">Aves</option>
                <option value="Animales Acuáticos">Acuáticos</option>
                <option value="Domestico">Domesticos</option>
                <option value="Pequeñas especies">Especies pequeñas</option>
                <option value="Animales de Granja">Granja</option>
                <option value="Animales Salvajes">Salvajes</option>
              </select>
            </div>
            <div class="div-select">
              <label class="label" for="film-select"
                >Es de una película de:</label
              >
              <select
                name="filmGenre"
                id="film-select"
                data-testid="select-filter"
              >
                <option value="" disable selected hidden>
                  Elige una opción
                </option>
                <option value="Comedia">Comedia</option>
                <option value="Infantil">Infantil</option>
                <option value="Fantasía">Fantasía</option>
                <option value="Musical">Musical</option>
                <option value="Drama">Drama</option>
                <option value="Romance">Romance</option>
              </select>
            </div>
            <button id="btnClear" data-testid="button-clear">
              Limpiar filtros
            </button>
          </div>
        </aside>
        <section id="cards"></section>
      </div>
    </main>

    <footer>
      <div class="container">
        <div id="footer-text-container">
          <p>
            <span id="parrafo-resaltado">Disney Macotas</span><br>
            <span id="parrafo-no-resaltado">Code By Pamela Briceño - Susana Equihua</span>
          </p>
      </div>
    </footer>
    <section class="modal ">
      <div class="modal-container">
        <div class="title-modal">
          <h4 class="modal-title"> Sabías que dentro del mundo de Disney...</h4>
        </div>
        <div class="container-percentage">
          <div class="stats-paragraph">
            <p class="modal-paragraph">Solo el<br><span id="genero" class="porcentaje"></span><br>de las mascotas Disney son hembras</p>
          </div>
          <div class="stats-paragraph">
            <p class="modal-paragraph">La mayoría de las mascotas son animales <span id="especie" class="valor"></span> y representan el<br><span id="numEspecie" class="porcentaje"></span><br>del total de mascotas</p>
          </div>
          <div class="stats-paragraph">
            <p class="modal-paragraph">Estas mascotas aparecen mayormente en peliculas de <span id="genreFilm" class="valor"></span> tienen un <br><span id="num-genreFilm" class="porcentaje"></span> <br>participacion en comparación con otros generos</p>
          </div>
      </div>
        <a href="#mainContenidoPrincipal" class="modal-close">Cerrar</a>
      </div>
    </section>
  `;

  const elementSection = viewHome.querySelector('section[id="cards"]'); //trae el elemento HTML que tendrá todas las tarjetas dentro
  elementSection.appendChild(renderItems(data)); //renderizamos las tarjetas dentro del section 

  let filteredData = data; //guardamos la data en una variable para que se actualice y luego poder usar la data filtrada
  //const originalData = [...data]; 


  let selectedSpeciesGroup = "";
  let selectedGender = "";
  let selectedFilmGenre = "";

  const filterSpecies = viewHome.querySelector("select[id=specie-select]");
  filterSpecies.addEventListener("change", function (event) {
    elementSection.innerHTML = "";
    selectedSpeciesGroup = event.target.value;
    filteredData = allFilter();
    elementSection.appendChild(renderItems(filteredData));
  });

  /*const filterSpecies = viewHome.querySelector("select[id=specie-select]");
  filterSpecies.addEventListener("change", function (event) {
    elementSection.innerHTML = "";
    const valorSeleccionado = event.target.value;
    filteredData = filterData(data, "speciesGroup", valorSeleccionado);
    elementSection.appendChild(renderItems(filteredData));
  });*/

  const filterGender = viewHome.querySelector("select[id=gender-select]");
  filterGender.addEventListener("change", function (event) {
    elementSection.innerHTML = "";
    selectedGender = event.target.value;
    filteredData = allFilter();
    elementSection.appendChild(renderItems(filteredData));
  });

  const filterFilmGenre = viewHome.querySelector("select[id=film-select]");
  filterFilmGenre.addEventListener("change", function (event) {
    elementSection.innerHTML = "";
    selectedFilmGenre = event.target.value;
    filteredData = allFilter();
    elementSection.appendChild(renderItems(filteredData));
  });

  function allFilter (/*tomar los valores de los selected */){
    if (selectedSpeciesGroup !== "") {
      filteredData = filterData(filteredData, "speciesGroup", selectedSpeciesGroup);
    }
    /*console.log(selectedSpeciesGroup);*/
    if (selectedGender !== "") {
      filteredData = filterData(filteredData, "gender", selectedGender);
    }
    if (selectedFilmGenre !== "") {
      filteredData = filterData(filteredData, "filmGenre", selectedFilmGenre);
    }
    return filteredData;
  }

  const sortDataAsc = viewHome.querySelector("button[id=btnUp]");
  sortDataAsc.addEventListener("click", function () {
    elementSection.innerHTML = "";
    const ordenAsc = sortData([...filteredData], "name", "ascendente");
    elementSection.appendChild(renderItems(ordenAsc));
  });
  const sortDataDesc = viewHome.querySelector("button[id=btnDown]");
  sortDataDesc.addEventListener("click", function () {
    elementSection.innerHTML = "";
    const ordenDesc = ()=>{
      if(filterFilmGenre && filterGender && filterSpecies){
        sortData([...filteredData], "name", "descendente");
      } else sortData(data, "name", "descendente");
    }
    elementSection.appendChild(renderItems(ordenDesc));
  });

  const filterClear = viewHome.querySelector("button[id=btnClear]");
  filterClear.addEventListener("click", function () {
    elementSection.innerHTML = "";
    elementSection.appendChild(renderItems(data));
    filterSpecies.value = "";
    filterGender.value = "";
    filterFilmGenre.value = "";
  });

  const estadistica = viewHome.querySelector("button[id=btn-stats]");
  const mostrarModal = viewHome.querySelector(".modal");
  const closeModal = viewHome.querySelector(".modal-close");
  const hembra = viewHome.querySelector("#genero");
  const especie = viewHome.querySelector("#especie");
  const especieNum = viewHome.querySelector("#numEspecie");
  const filmGenero = viewHome.querySelector("#genreFilm");
  const numFilmGenero = viewHome.querySelector("#num-genreFilm");

  estadistica.addEventListener("click", function () {
    mostrarModal.classList.add("modal--show");
    const hembraCalculo = computeStats(data, "Hembra");
    hembra.innerHTML = hembraCalculo.genero + "%";

    const porcentajesEspecies = {
      aves: computeStats(data, "Aves"),
      acuaticos: computeStats(data, "Animales Acuáticos"),
      domesticos: computeStats(data, "Domestico"),
      especiesPequeñas: computeStats(data, "Pequeñas especies"),
      granja: computeStats(data, "Animales de Granja"),
      salvajes: computeStats(data, "Animales Salvajes"),
    };
    let grupoMayorEspecies = "";
    let porcentajeMayorEspecies = 0;

    for (const group in porcentajesEspecies) {
      if (porcentajesEspecies[group].especies > porcentajeMayorEspecies) {
        porcentajeMayorEspecies = porcentajesEspecies[group].especies;
        grupoMayorEspecies = group;
      }
    }

    especie.innerHTML = grupoMayorEspecies;
    especieNum.innerHTML = porcentajeMayorEspecies + "%";

    const porcentajePeliculas = {
      comedia: computeStats(data, "Comedia"),
      infantil: computeStats(data, "Infantil"),
      fantasia: computeStats(data, "Fantasía"),
      musical: computeStats(data, "Musical"),
      drama: computeStats(data, "Drama"),
      romance: computeStats(data, "Romance"),
    };

    let grupoMayorPeliculas = "";
    let porcentajeMayorPeliculas = 0;

    for (const pelicula in porcentajePeliculas) {
      if (porcentajePeliculas[pelicula].peliculas > porcentajeMayorPeliculas) {
        porcentajeMayorPeliculas = porcentajePeliculas[pelicula].peliculas;
        grupoMayorPeliculas = pelicula;
      }
    }

    filmGenero.innerHTML = grupoMayorPeliculas;
    numFilmGenero.innerHTML = porcentajeMayorPeliculas + "%";
  });

  closeModal.addEventListener("click", function () {
    mostrarModal.classList.remove("modal--show");
  });

  const buttonFilter = viewHome.querySelector("#btn-filter");
  const filterMenu = viewHome.querySelector("aside .container");
  buttonFilter.addEventListener("click", function () {
    if (filterMenu.style.visibility === "hidden") {
      filterMenu.style.visibility = "visible";
    } else {
      filterMenu.style.visibility = "hidden";
    }
  });
  return viewHome;
};

export default Home;
