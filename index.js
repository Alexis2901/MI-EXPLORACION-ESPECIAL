const planetas = require('./planeta');
const cowsay = require('cowsay');

console.log(cowsay.say({
  text: "¡Bienvenido al Registro Planetario!",
  e: "^^",
  T: "U "
}));

planetas.forEach(planeta => {
  console.log(`🪐 Planeta: ${planeta.nombre}`);
  console.log(`📖 Descripción: ${planeta.descripcion}`);
  console.log(`📅 Descubierto en: ${planeta.descubiertoEn}`);
  console.log(`📍 Coordenadas: ${planeta.coordenadas}`);
  console.log('---');
});
