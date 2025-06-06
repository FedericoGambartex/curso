document.addEventListener("DOMContentLoaded", function () {
  const boton = document.querySelector(".btn-notify");

  boton.addEventListener("click", function () {
    if (!("Notification" in window)) {
      alert("Tu navegador no soporta notificaciones.");
      return;
    }

    Notification.requestPermission().then(function (permiso) {
      if (permiso === "granted") {
        new Notification("¡Gracias!", {
          body: "Te vamos a mantener al tanto de todo 💌",
        });
      } else if (permiso === "denied") {
        alert("Bloqueaste las notificaciones.");
      }
    });
  });
});