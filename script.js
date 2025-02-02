// Animación de desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactividad de botones "Ver más"
document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', () => {
        alert('¡Pronto añadiremos más detalles sobre este servicio!');
    });
});