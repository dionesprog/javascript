

let varA = 'A';
let varB = 'B';
let varC = 'C';

// nesse exemplo cria-se variavel temporaria mantem o valor da variavel original
const varTempA = varA; 
const varTempB = varB;
const varTempc = varC;

varA = varTempB;
varB = varTempc;
varC = varTempA;

/* Outra forma de resolução seria
[varA, varB, varC ] = [varB, varC, varA]
*/


console.log(varA, varB, varC);