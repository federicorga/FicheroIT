

window.onload=function(){
  let contenedor= document.getElementById('loader');

  contenedor.style.transition='1.5s';
  contenedor.style.visibility= 'hidden';
  contenedor.style.opacity = '0';
  contenedor.style.zIndex='-1';
  
  contenedor.setAttribute('transition-style','out:wipe:top-right')
}

async function runApp() { //inicia la aplicacion con todos sus componentes

  await ArrayJsonToOtherArray(convertJsonToArrayJson(catalogJson), listaPageWeb);
  //almacena arrayJson en un array existente (listaPageWeb)
  await renderAllListArrayToCard(listaPageWeb);
  //renderiza el array existente ya modificado en tarjetas (card) y las visualiza en el navegador.

  //Otra formaEjemplo  await renderAllListArrayToCard(await convertJsonToArrayJson(catalogJson));

  vincularBarraDeBusqueda();
  //ejecuta la barra de busqueda vinculada

  renderClima();
  //ejecuta el clima
 
  runFiltro();
  //Ejecuta el filtro de los links del NavBar


}




//-----------------Ejecutar-----------------



runApp();




