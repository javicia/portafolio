let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("spring");
        habilidades[2].classList.add("mysql");
        habilidades[3].classList.add("oracle");
        habilidades[4].classList.add("postgresql");
        habilidades[5].classList.add("sqlite");
        habilidades[6].classList.add("firebase");
        habilidades[7].classList.add("androidstudio");
        habilidades[8].classList.add("html");
        habilidades[9].classList.add("css");
        habilidades[10].classList.add("javascript");
        habilidades[11].classList.add("boostrap");
        habilidades[12].classList.add("angular");
        habilidades[13].classList.add("comunicacion");
        habilidades[14].classList.add("trabajo");
        habilidades[15].classList.add("creatividad");
        habilidades[16].classList.add("dedicacion");
    
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 