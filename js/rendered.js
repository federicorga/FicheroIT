const contentCards = document.getElementById("contentCards");


function renderCardModel(page) {

    //Modelo de la tarjeta a renderizar.

    const card = document.createElement("div");

    card.classList.add(`card`)

    card.innerHTML = `

        <a href="${page.link}" class="linkCard" target= "_blank">
        <div class="card-info">
                <div class="card-img"> 
                    <img src="http://www.google.com/s2/favicons?domain=${page.link}" class="imgFavic"  alt="...">
                </div>
              <p class="title">${page.nameWeb}</p>
              <p class="subtitle">${page.category} - ${page.subCategory}</p>
            </div>
            <div class="card-bio">
             <p id="descriptionCard${page.id}">${page.description}</p>
            </div>
        
        </a>
      
    `


    contentCards.appendChild(card);


}


