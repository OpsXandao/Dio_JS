class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso= peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura*this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc<18.5){
            return('abaixo do peso');
        }
        
        if (imc>18.5 && imc<25){
            return('peso normal');
        }
        
        if (imc>25 && imc<30){
            return('acima do peso');
        }
        
        if (imc>30 && imc<40){
            return('obeso');
        }
        
        if (imc>40){
            return('obesidade mórbida');
        }
    }
}

const alexandre = new Pessoa('Alexandre', 92, 1.73);
console.log(alexandre.calcularImc());
console.log(alexandre.classificarImc());