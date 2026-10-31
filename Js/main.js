/* ===================================================
   TecnoFix Lima - AngularJS 1.5 (cotizador de servicios)
   Se usa solo en servicios.html
   =================================================== */

// 1. Módulo de la aplicación (el nombre debe ser igual al de ng-app en el HTML)
var app = angular.module('tecnoFixApp', []);

// 2. Controlador del cotizador
app.controller('CotizadorController', function ($scope) {

  // Datos: los precios están en un solo lugar y se muestran en la tabla y en los selects
  $scope.dispositivos = [
    { nombre: 'Smartphone / Tablet',     precio: 50 },
    { nombre: 'Laptop convencional',     precio: 60 },
    { nombre: 'PC de escritorio',        precio: 70 },
    { nombre: 'Laptop Gaming / MacBook', precio: 90 }
  ];

  $scope.servicios = [
    { codigo: 'SRV-01', nombre: 'Mantenimiento y limpieza',       tiempo: '24 horas', precio: 40 },
    { codigo: 'SRV-02', nombre: 'Formateo e instalación de S.O.', tiempo: '24 horas', precio: 30 },
    { codigo: 'SRV-03', nombre: 'Diagnóstico electrónico',        tiempo: '48 horas', precio: 100 },
    { codigo: 'SRV-04', nombre: 'Microsoldadura y electrónica',   tiempo: '48 horas', precio: 180 }
  ];

  // Opciones elegidas por el cliente (al inicio no hay ninguna)
  $scope.dispositivo = null;
  $scope.servicio = null;

  // Total = revisión del equipo + servicio
  $scope.total = function () {
    var total = 0;
    if ($scope.dispositivo) { total += $scope.dispositivo.precio; }
    if ($scope.servicio) { total += $scope.servicio.precio; }
    return total;
  };
});
