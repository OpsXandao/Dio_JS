
function calcularImc(peso, altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
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

function main(){
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();


