// Añadimos la clase 'scrolled' al hacer scroll en la sección de héroe
window.addEventListener('scroll', function() {
    // Usamos requestAnimationFrame para optimizar el rendimiento
    window.requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Añadimos o removemos la clase 'scrolled' basada en el scroll
        const heroSection = document.querySelector('.hero');
        if (scrollTop > heroSection.offsetHeight) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }

        // Movimiento parallax y rotación de las imágenes circundantes
        const sideImgs = document.querySelectorAll('.side-img');
        sideImgs.forEach((img, index) => {
            // Ajusta el desplazamiento y la rotación según el índice
            let offset = scrollTop * (0.1 + index * 0.1);
            let rotation = scrollTop * (0.05 + index * 0.05); // Ajusta la rotación según el efecto deseado
            
            // Aplicamos la transformación de desplazamiento y rotación
            img.style.transform = `translateY(${offset}px) rotate(${rotation}deg)`;
        });
    });
});
