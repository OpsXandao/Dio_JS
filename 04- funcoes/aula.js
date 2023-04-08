function sayMyName(name){
    console.log('Your name is: ' + name);
}

sayMyName('Xandão');

function quadrado(valor){
    return valor * valor;
}

const QuadradoDeDez = quadrado(10);
console.log(QuadradoDeDez);

function incrementarJuros(valor, percentualJuros){
    const ValorDeAcrecimo = (percentualJuros/100) * valor;
    return valor + ValorDeAcrecimo;
}

console.log(incrementarJuros(187,20));