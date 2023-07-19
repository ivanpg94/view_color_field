/*
(function ($, Drupal, drupalSettings) {
 Drupal.behaviors.MyModuleBehavior = {
   attach: function (context, settings) {
*/
var productos = drupalSettings.datos.view_color_field;
if(productos == 'productos'){

  var stock = document.getElementsByClassName("coloresstock");

  for(var i = 0; i < stock.length; i++)
  {
    contenido = stock[i].textContent;
    var notatransaciones = document.querySelectorAll(".js-form-item-form-field-field-stock-"+i+"-field-stock-0-stock-transaction-note");
    notatransaciones.forEach(function(notatransacion) {
      notatransacion.style.display = 'none';
    });
    if(contenido <= 0){
      stock[i].style.color = 'red';
      stock[i].style.fontWeight = 'bold';
    }else{
      stock[i].style.color = 'green';
      stock[i].style.fontWeight = 'bold';
    }
  }
  var titulos = document.querySelectorAll(".is-disabled.form-item__label");
  titulos.forEach(function(titulo) {
    titulo.style.display = 'none';
  });
  var descripcions = document.querySelectorAll(".is-disabled");
  descripcions.forEach(function(descripcion) {
    descripcion.style.display = 'none';
  });
  var cajas = document.querySelectorAll(".form-item__description");
  cajas.forEach(function(caja) {
    caja.style.display = 'none';
  });
  var otradescrips = document.querySelectorAll(".js-form-item-form-field-field-stock-0-field-stock-0-stock-transaction-note");
  otradescrips.forEach(function(otradescrip) {
    otradescrip.style.display = 'none';
  });
  var legends = document.querySelectorAll(".fieldset__legend");
  legends.forEach(function(legend) {
    legend.style.display = 'none';
  });
  var notatransaciones = document.querySelectorAll(".js-form-item-form-field-field-stock-1-field-stock-0-stock-transaction-note");
  notatransaciones.forEach(function(notatransacion) {
    notatransacion.style.display = 'none';
  });
}

var pedidos = drupalSettings.datos.view_color_field;
if(pedidos == 'pedidos'){
  var paragraphs = document.getElementsByTagName("p");
  var completed = document.getElementsByClassName("views-field-state");
  for(var i = 0; i < completed.length; i++)
  {
    contenido = completed[i].textContent;
    if(contenido.includes('Completed')){
      completed[i].style.color = 'green';
      completed[i].style.fontWeight = 'bold';
    }else if(contenido.includes('Completado')){
      completed[i].style.color = 'green';
      completed[i].style.fontWeight = 'bold';
    }else if(contenido.includes('invoiced')){
      completed[i].style.color = 'green';
      completed[i].style.fontWeight = 'bold';
    }else if(contenido.includes('Facturado')){
      completed[i].style.color = 'green';
      completed[i].style.fontWeight = 'bold';
    }else if(contenido.includes('Pendiente')){
      completed[i].style.color = 'red';
      completed[i].style.fontWeight = 'bold';
    }else if(contenido.includes('Canceled')){
      completed[i].style.color = 'red';
      completed[i].style.fontWeight = 'bold';
    }else if(contenido.includes('Cancelado')){
      completed[i].style.color = 'red';
      completed[i].style.fontWeight = 'bold';
    }
  }
}
/*
   }
 };
})(jQuery, Drupal, drupalSettings);

*/
