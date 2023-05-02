

const {gets,print} = require('./funcoes-auxiliares');

const quntidadeDeAlunos = gets();
let maiorValor = 0;
for (let i = 0; i < quntidadeDeAlunos.length; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado>maiorValor){
        maiorValor = numeroSorteado;
    }
}




print(maiorValor);