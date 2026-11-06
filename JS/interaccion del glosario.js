document.addEventListener("DOMContentLoaded", () => {
    // 1. Funcionalidad de acordeón para el Glosario de personajes
    const tarjetasPersonaje = document.querySelectorAll(".tarjeta-personaje");

    tarjetasPersonaje.forEach(tarjeta => {
        const header = tarjeta.querySelector(".tarjeta-header");

        if (header) {
            header.addEventListener("click", () => {
                // Alterna la clase 'activa' para mostrar u ocultar el contenido
                tarjeta.classList.toggle("activa");
            });
        }
    });

    // 2. Efecto interactivo sutil para las tarjetas de las secciones (como la Sección 1)
    const tarjetasSeccion = document.querySelectorAll(".tarjeta-seccion");

    tarjetasSeccion.forEach(tarjeta => {
        tarjeta.addEventListener("mouseenter", () => {
            tarjeta.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            tarjeta.style.transform = "translateY(-4px)";
        });

        tarjeta.addEventListener("mouseleave", () => {
            tarjeta.style.transform = "translateY(0)";
        });
    });
});