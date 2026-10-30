/* ===================================================
   TecnoFix Lima - Scripts del sitio
   =================================================== */

// 1. Cotizador (solo se ejecuta donde AngularJS está cargado: servicios.html)
if (typeof angular !== 'undefined') {
  var app = angular.module('tecnoFixApp', []);

  app.controller('CotizadorController', function ($scope) {
    // Fuente única de precios: alimenta la tabla y el cotizador
    $scope.dispositivos = [
      { nombre: 'Smartphone / Tablet',      cargo: 50 },
      { nombre: 'Laptop convencional',      cargo: 60 },
      { nombre: 'PC de escritorio',         cargo: 70 },
      { nombre: 'Laptop Gaming / MacBook',  cargo: 90 }
    ];

    $scope.servicios = [
      { codigo: 'SRV-01', nombre: 'Mantenimiento y limpieza',       tiempo: '24 horas', costo: 40 },
      { codigo: 'SRV-02', nombre: 'Formateo e instalación de S.O.', tiempo: '24 horas', costo: 30 },
      { codigo: 'SRV-03', nombre: 'Diagnóstico electrónico',        tiempo: '48 horas', costo: 100 },
      { codigo: 'SRV-04', nombre: 'Microsoldadura y electrónica',   tiempo: '48 horas', costo: 180 }
    ];

    $scope.seleccion = { dispositivo: null, servicio: null };

    $scope.total = function () {
      var s = $scope.seleccion;
      return (s.dispositivo ? s.dispositivo.cargo : 0) + (s.servicio ? s.servicio.costo : 0);
    };
  });
}

// 2. Formulario de soporte (solo en contacto.html)
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('registroForm');
  if (!form) return;

  var campoFecha = document.getElementById('fechaAtencion');
  var errorFecha = document.getElementById('errorFecha');

  // Fecha mínima: hoy (hora local)
  var hoy = new Date();
  campoFecha.min = hoy.getFullYear() + '-' +
    String(hoy.getMonth() + 1).padStart(2, '0') + '-' +
    String(hoy.getDate()).padStart(2, '0');

  // No se atiende los domingos
  campoFecha.addEventListener('input', function () {
    var domingo = campoFecha.value && new Date(campoFecha.value + 'T00:00:00').getDay() === 0;
    campoFecha.setCustomValidity(domingo ? 'Atendemos de lunes a sábado.' : '');
    errorFecha.textContent = domingo ? 'Atendemos de lunes a sábado. Elige otro día.' : 'Elige una fecha de visita.';
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    var nombre = document.getElementById('nombreCliente').value.trim();
    var correo = document.getElementById('correoCliente').value.trim();
    var fecha = new Date(campoFecha.value + 'T00:00:00').toLocaleDateString('es-PE', {
      weekday: 'long', day: 'numeric', month: 'long'
    });

    alert('¡Gracias, ' + nombre + '! Registramos tu solicitud. Te escribiremos a ' + correo +
          ' para confirmar tu visita del ' + fecha + '.');

    form.reset();
    form.classList.remove('was-validated');
  });
});
