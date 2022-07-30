//              0        1        2
const alunos = ["Luiz", "Maria", "Joao"];

alunos[1] = 'Pedro'; /*nessa variavel altera a posição 1 onde Maria vira Pedro*/
//console.log(alunos);

//console.log(alunos[2]); traz a infomração do aluno na posiçao 2;
alunos[3] = "Luiza"; /* nesse comando adiciono um novo aluno a lista na posição 3.*/

// console.log(alunos.length); nesse comando eu trago tamanho do array numero total de posições do array

/*No exemplo abaixo vou aumentado as posições do array adicionando mais componentes
alunos[alunos.length] = "Joana";
alunos[alunos.length] = "Jorge";
alunos[alunos.length] = "Felipe";
console.log(alunos);
*/

/* nesse comando push eu adicionado um elemento no final da posição
alunos.push('Lucas');
console.log(alunos);
*/

//nesse comando unshift coloco elemento na frente do primeiro elemento passa ser o elemento 0
/*alunos.unshift('Wallace');
console.log(alunos);
*/

//ainda no comando unshift posso ir adicionando elementos no inicio sendo que sempre o mais atual vem na frente como exemplo abaixo.

/*
alunos.unshift('Joao'); // Joao assume a primeira posição
alunos.unshift('Maria'); // Maria assume a segunda posição
alunos.unshift('Marcela'); // Marcela assume a primeira posição
console.log(alunos);
*/

/*
const removido = alunos.pop(); // remove o ulima posição do array
console.log(removido); // traz o elemento que foi removido
console.log(alunos); // traz a relação dos nomes atualizada
*/

/*
const removido = alunos.shift(); // remove a primeira posição do array
console.log(removido); // traz o elemento removido
console.log(alunos); // traz a relação dos nomes atualizada
*/

// para fatiar elemento ou seja remover o elemento é feito com slice
alunos.push('Jhonata');
alunos.push('Marcos');
alunos.push('guilherme');
//console.log(alunos.slice(0, 2)) /*quantos elemento quero trazer sempre colocando um elemnto a mais do que você quer por exemplo para 2 elementos colocasse (0, 3)*/

//console.log(alunos.slice(0, -2)) /*com valor negativo usa o tamanho do array menos o valor especificado no array.

//elemento dentro de [] colchetes sempre vai ser array
console.log(alunos instanceof Array); // retorna se o valor é Array











