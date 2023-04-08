function aplicarDesconto(valor, desconto){
    return (valor - (valor*(desconto/100)));
}

function aplicarJuros(valor, desconto){
    return (valor + (valor*(desconto/100)));
}

const precoEtiqueta = 100;
//1- Débito| 2 Pix | 3- Em 2x | 4- Mais de 2x
const formaDePagamento=4;



if(formaDePagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta,10));
}

if(formaDePagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta,15));
 }

 if(formaDePagamento === 3){
     console.log('R$' + precoEtiqueta);
 }

 if(formaDePagamento === 4){
    console.log(aplicarJuros(precoEtiqueta,10));
 }