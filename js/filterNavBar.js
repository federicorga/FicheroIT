

function filtro(valorId, propiedadObjeto, filtro = "") {
    //Esta funcion permite capturar el id, crear el documento
    // y asignarle el evento click que permite filtrar el catalogo
    //todo esto dependiendo de que parametro le pase desea mostrar.
    valorId = document.getElementById(valorId);
    valorId.addEventListener("click", () => {
        ActualizarCatalogo(listaPageWeb, contentCards, propiedadObjeto, filtro);
    })
}


function runFiltro() {
    filtro("btnTodo", "category")
    filtro("btnDocs", "category", "documentacion");
    filtro("btnHerra", "category", "herramienta")
    filtro("btnHtml","subCategory","html")
    filtro("btnCss", "subCategory", "css");
    filtro("btnJs", "subCategory", "javaScript");
    filtro("btnReact", "subCategory", "React");
    filtro("btnGit", "subCategory", "Git");
    filtro("btnBd", "subCategory", "BD");
    filtro("btnNodejs", "subCategory", "nodejs");
}