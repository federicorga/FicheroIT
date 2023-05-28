const barraBuscador = document.getElementById("barraBuscador");



function vincularBarraDeBusqueda() {
    //Me permite filtrar en la barra de busqueda al vincularlo con un contenedor.
    //muestra todo el catalogo si la barra de busqueda esta vacia.
    const textoEscrito = barraBuscador.value;
    ActualizarCatalogo(listaPageWeb, contentCards, "nameWeb", textoEscrito);
    barraBuscador.addEventListener('keyup', vincularBarraDeBusqueda);

}


function ActualizarCatalogo(array, ContenedorById, propiedadObjetoArray, textValue = '') {
    //Esta funcion me permite traer todo el catalogo o una parte de acuerdo a lo especificado en
    // sus parametros
    ContenedorById.innerHTML = ''; //actualizo el Catalogo
    const TextValueMin = textValue.toLowerCase();
    array.forEach((object) => {
        const nombreProp = `${object[`${propiedadObjetoArray}`]}`;
        const nombrePropMin = nombreProp.toLowerCase();
        if (nombrePropMin.indexOf(TextValueMin) !== -1) {
            renderCardModel(object);
        }
    })
    if (ContenedorById.innerHTML === '') {
        ContenedorById.innerHTML = `
        <div class="notFoundGame animate__animated animate__fadeIn">
            <h2>No se han encontrado resultados</h2>
            <img  src="img/notfoundlupa.png" alt="Not Found" width="100px"/>
        </div>`
    }
}



