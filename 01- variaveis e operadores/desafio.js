const precoCombustivel = 7.48;
const kmPorLitros = 13.5;
const distanciaEmKm = 31;
const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos*precoCombustivel;



console.log('R$', valorGasto.toFixed(2))