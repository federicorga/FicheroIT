//<aysf_wcoar19@xuneh.com>
//contraseñ: pepe1234
//[-34.6132, -58.3772]

const obtenerFechaHoy = () => {
  const opcionesFecha = { weekday: 'long', day: 'numeric' };
  const hoy = new Date();
  const fechaHoy = hoy.toLocaleDateString('es-ES', opcionesFecha);

  return fechaHoy;
};
const cargarClima= async()=>{
  const apiKey='f9ac63ce78fd137938048bac3bbc58a3';
  const latitud='-34';
  const longitud ='-64';
  const idioma='sp'
try {
  const respuesta= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&lang=${idioma}&appid=${apiKey}`);
  

  const datos= await respuesta.json();

  const { weather: [{ main, description, icon }], name, main: { temp, humidity } } = datos;

  const tempCelcius=Math.ceil(temp-273.15);


const palabra = icon.includes("n");

  console.log(datos);
  
  return{main,description,icon,name,tempCelcius,humidity,palabra};

 // const { weather: [{ main }] } = datos; // forma desestructurada para acceder a los datos

 // console.log(main);
  
} catch (error) {
  console.log(error);
  
}
  
}

const climaHora = document.getElementById("climaHora");


async function  renderClima() {

  
const wea= await cargarClima();
  

  const clima = document.createElement("div");

  if(wea.palabra){
    clima.classList.add("cardN")
  }else{
   clima.classList.add("cardD")
  }

  clima.innerHTML = `
    
      <div class="container">
        <div class="cloud front">
          <span><img src="https://openweathermap.org/img/wn/${wea.icon}@2x.png" width="150px"></span>
        
        </div>
        
        <span class="descriptionClima">${wea.description}</span>
      </div>

      <div class="card-header">
        <span>Buenos Aires<br>${wea.name}</span>
        <span>${obtenerFechaHoy()}</span>
      </div>

      <span class="temp">${wea.tempCelcius}°C</span>

      <div class="temp-scale">
        <span>Celcius</span>
      </div>
    
  
`


  climaHora.appendChild(clima);

}