const entradas = [5,2,4,1,2,88,4,33,45554,444444,,10,98,23];
let i =0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};