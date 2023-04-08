let precoGasolina = 6.48;
let precoEtanol = 5;
let kmPorLitros = 10;
let combustivel = 'e';
const distanciaEmKm = 31;
const litrosConsumidos = distanciaEmKm / kmPorLitros;


if (combustivel === 'g'){
    kmPorLitros =13,5;
    const valorGasto = litrosConsumidos*precoGasolina;
   console.log('R$' + valorGasto.toFixed(2));
} 

if (combustivel === 'e'){
    kmPorLitros =11;
    const valorGasto = litrosConsumidos*precoEtanol;
    console.log('R$', valorGasto.toFixed(2));
} 