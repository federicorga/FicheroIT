
function renderAllListArrayToCard(listArrayObject) {
    // transforma la lista de array de objetos a modelo tarjeta.
    listArrayObject.forEach(object => {
        renderCardModel(object);
    })
}

function generarNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min)) + min;

    //no incluye el valor maximo si es entre 1 y 2 tengo que poner min 1 max 3
}


const catPets=document.getElementById("catPet");

function catPet(){


const globoCats=document.getElementById("globoCats");

const texts= document.createElement("span");

texts.classList.add(`TextCat`)



const random= generarNumeroAleatorio(1,6);


if(random === 1){

    texts.innerText=`Meow!`
   
    
    
}if(random === 2){

    texts.innerText=`💻🐾`
    
    
}

if(random === 3){

    texts.innerText=`😻`
    
    
}
if(random === 4){

    texts.innerText=`✊😸`
    
    
}

if(random === 5){

    texts.innerText=`❤️`
    
    
}

    globoCats.appendChild(texts);

    globoCats.classList.toggle("globoCat2");
    setTimeout( function(){
        globoCats.classList.toggle("globoCat2")
        texts.remove();
        
    },1000)

   
}




catPets.addEventListener("click",()=>{
    catPet();  
})




