alert("¡Bienvenidos a este quizz de mateticas!⭐⭐⭐")
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menuContainer = document.getElementById('menu-container');
    var currentLeft = parseInt(window.getComputedStyle(menuContainer).left);
  
    
    if (currentLeft < 0) {
      menuContainer.style.left = '0';
    } else {
      menuContainer.style.left = '-250px';
    }
  });

  //

  

  //


  document.addEventListener('DOMContentLoaded', function () {
    var empezarButton = document.querySelector('.Alerta button');

    empezarButton.addEventListener('click', function () {
      var confirmacion = confirm('¡Agárrate fuerte, porque tu futuro está lleno de posibilidades y aventuras esperando a ser exploradas! ¿Seuro que queires comenzar?');

      if (confirmacion) {
        window.location.href = 'Maths.html';
      }
    });
  });


z   
  function limitarNumero(input, max) {
    if (input.value > max) {
      input.value = max;
    }
  }


// JavaScript para manejar el evento de clic o toque en el botón de menú
document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
document.getElementById('menu-toggle').addEventListener('touchstart', toggleMenu);

// Función para mostrar u ocultar el menú lateral
function toggleMenu() {
    var menuContainer = document.getElementById('menu-container');
    var currentLeft = parseInt(window.getComputedStyle(menuContainer).left);

    // Si el menú está oculto, mostrarlo; de lo contrario, ocultarlo
    menuContainer.style.left = currentLeft < 0 ? '0' : '-250px';
}

// Otro código que puedas tener en tu archivo JavaScript...