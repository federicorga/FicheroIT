
const climaHora = document.getElementById("climaHora");


function renderClima() {

  const clima = document.createElement("div");
  clima.classList.add("cardm")

  clima.innerHTML = `
    
      <div class="container">
        <div class="cloud front">
          <span class="left-front"></span>
          <span class="right-front"></span>
        </div>
        <span class="sun sunshine"></span>
        <span class="sun"></span>
        <div class="cloud back">
          <span class="left-back"></span>
          <span class="right-back"></span>
        </div>
      </div>

      <div class="card-header">
        <span>Buenos Aires<br>Argentina</span>
        <span>Lunes 20</span>
      </div>

      <span class="temp">23°</span>

      <div class="temp-scale">
        <span>Celcius</span>
      </div>
    
  
`


  climaHora.appendChild(clima);

}