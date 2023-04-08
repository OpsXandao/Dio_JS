let nota1 = 7;
let nota2 = 7;
let nota3 = 0;
let media = (nota1+nota2+nota3)/3;

console.log(media);

if(media<5){
    console.log('Reprovado');
}

if(media>=5 && media <=7){
    console.log('Recuperação');
}

if(media>7){
    console.log('Aprovado');
}