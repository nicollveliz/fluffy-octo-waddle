// script.js

document.addEventListener('DOMContentLoaded', function() {
    const galleryImgs = document.querySelectorAll('img');

    galleryImgs.forEach(img => {
        const imgSrc = img.src.toLowerCase(); // Convertimos la ruta de la imagen a minúsculas
        if (imgSrc.includes('/imágenes/imagen')) { // Verificamos si la ruta de la imagen contiene '/imágenes/imagen'
            img.addEventListener('mouseover', function() {
                img.style.transform = 'translateY(-5px)';
            });

            img.addEventListener('mouseout', function() {
                img.style.transform = 'translateY(0)';
            });
        }
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Eliminar la clase 'active' de todos los enlaces
            navLinks.forEach(navLink => {
                navLink.parentNode.classList.remove('active');
            });

            // Agregar la clase 'active' solo al enlace seleccionado
            this.parentNode.classList.add('active');
        });
    });
});
