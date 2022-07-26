/*
Diones Marco tem 35 anos, pesa 80kg tem 1.95 de altura e seu IMC é de 20.512820512820515, seu ano de nascimento é 1987 .
*/

let nome = 'Diones';
let sobrenome = 'Marco';
let idade = 35;
let peso = 80;
let altura = 1.95;
let imc = peso / (altura*2) ; // IMC = Indice de Massa corporal
let anoNascimento = 2022 - idade;

// Template String
console.log (`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg tem ${altura} de altura e seu IMC é de ${imc}, seu ano de nascimento é ${anoNascimento} .`)