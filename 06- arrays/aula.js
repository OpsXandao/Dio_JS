const alunos = ['João', 'Vitor', 'Marina'];

alunos.push('Renan')

alunos[4] = 'Vinicius';

console.log(alunos[3]);

console.log(alunos);

//Puxa o último do Array
console.log(alunos.pop());

//Puxa o primeiro do Array

console.log(alunos.shift());

console.log(alunos.length);

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);

}