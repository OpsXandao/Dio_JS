class Carros{
    marca;
    cor;
    kmPorLitro;

    constructor(marca, cor, kmPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    calcularGastoDePercurso(distancia, precoCombustivel,){
       return distancia*this.kmPorLitro *precoCombustivel;
    }
     
}
const uno = new Carros('Fiat','Prata',1/12);
console.log(uno.calcularGastoDePercurso(70,5));


