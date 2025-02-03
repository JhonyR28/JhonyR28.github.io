// Animación de desplazamiento suave para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Interactividad de los botones "Ver más" en la sección de servicios
  document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', () => {
      alert('¡Pronto añadiremos más detalles sobre este servicio!');
    });
  });
  
