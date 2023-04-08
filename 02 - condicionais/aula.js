

const numero = 7;
const numeroPar = (numero % 2) === 0;

if(numero === 0){
    console.log('Número inválido');
} else if (numeroPar){
    console.log('É par');
} else{
    console.log('É impar');
}

