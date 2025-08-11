// Esperar a que el DOM esté listo
$(document).ready(inicializarMenu);

function inicializarMenu() {
  $(".hamb").click(function (e) {
    e.preventDefault();
    $("header .container nav").toggleClass("open");

    // Alternar ícono
    const icono = $(".hamb i");
    if (icono.hasClass("fa-bars")) {
      icono.removeClass("fa-bars").addClass("fa-circle-xmark");
    } else {
      icono.removeClass("fa-circle-xmark").addClass("fa-bars");
    }
  });

  // Cerrar menú al hacer clic en enlace y volver ícono a hamburguesa
  $("header .container nav a").click(function () {
    $("header .container nav").removeClass("open");
    $(".hamb i").removeClass("fa-circle-xmark").addClass("fa-bars");
  });
}
