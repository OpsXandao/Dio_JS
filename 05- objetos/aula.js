
class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const p1 = new Pessoa('Alexandre', 20);
const p2 = new Pessoa('Yasmin', 27);

p2.descrever();

function compararPessoas(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    } else if(p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    } else{
        console.log(`${p1.nome} tem a mesma idade de ${p2.nome}`)
    }
}

compararPessoas(p1, p2);

 
