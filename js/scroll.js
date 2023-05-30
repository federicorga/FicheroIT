let ubicacionInicial = 0;
window.onscroll=function(){
    
    let ubicacionActual = window.pageYOffset;
    //console.log("es" + ubicacionInicial);

    if(ubicacionInicial< 200){
        document.getElementById('desplazador').style.opacity="0"
        document.getElementById('desplazador').style.overflow="hidden"
    }else{
        document.getElementById('desplazador').style.opacity="100"
        document.getElementById('desplazador').style.overflow="visible"
    }

    ubicacionInicial= ubicacionActual;

}