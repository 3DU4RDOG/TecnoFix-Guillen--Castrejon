/* ===================================================
   TecnoFix Lima - Formulario de soporte (contacto.html)
   =================================================== */

document.addEventListener('DOMContentLoaded', function () {
  var formulario = document.getElementById('registroForm');
  var campoFecha = document.getElementById('fecha');

  // No permitir fechas pasadas (formato AAAA-MM-DD)
  campoFecha.min = new Date().toLocaleDateString('en-CA');

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var fecha = campoFecha.value.split('-').reverse().join('/');   // DD/MM/AAAA

    alert('¡Gracias ' + nombre + '! Tu solicitud fue registrada. Te esperamos el ' + fecha +
          ' en nuestro taller de Cercado de Lima.');

    formulario.reset();
  });
});
