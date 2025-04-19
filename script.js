// Scroll suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Modo oscuro
  document.getElementById('toggle-dark').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Mensaje de confirmación tras enviar
  document.getElementById('form-contacto').addEventListener('submit', function (e) {
    const msg = document.getElementById('mensaje-confirmacion');
    msg.innerText = "Enviando...";
  });
  