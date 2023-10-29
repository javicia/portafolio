let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    const skills = document.getElementById("skills");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        const habilidades = document.querySelectorAll(".progreso");
        const habilidadesNombres = [
            "java", "spring", "mysql", "oracle", "postgresql", "sqlite",
            "firebase", "androidstudio", "html", "css", "javascript",
            "boostrap", "angular", "git", "comunicacion", "trabajo", 
            "creatividad", "dedicacion", "adaptabilidad", "pensamiento", 
            "organizacion", "problemas", "resilencia"
        ];

        habilidades.forEach((habilidad, index) => {
            habilidad.classList.add(habilidadesNombres[index]);
        });
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = efectoHabilidades;
