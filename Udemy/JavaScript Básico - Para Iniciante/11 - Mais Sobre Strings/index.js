let umaString = "Um \"texto\"";
console.log(umaString);

let outraString = "Um \\texto";
console.log(outraString);

let outrasString = "Um texto";
console.log(outrasString[4]);

let exemString = "O rato roeu a roupa do rei de roma.";

//escolher qual elemento esta em uma determinada posição
console.log(exemString.charAt(32)) /* trouxe a letra m */

//como pesquisar por um indice qual indice começa a palavra
console.log(exemString.indexOf('rato'))

// saber o tamanho da string usa-se a expressão length
console.log(outrasString.length);

//fatiamento de palavra primeiro dado onde começa e o segundo onde termina

console.log(exemString.slice(2, 6));  /* trazer --rato--*/
console.log(exemString.slice(-3)); /* traz o total menos 3 ultmimos digitos --ma.--*/
console.log(exemString.slice(-5)); /* traz o total menos 5 ultmimos digitos -roma.--*/
console.log(exemString.slice(-5, -1))/* traz o total menos 5 ultmimos digitos, e o -1 tira o ultimo digito que seria o . --roma--*/

// divisão da string
/* traz a função split dentro do parantes especifica o que se quer dividir*/
console.log(exemString.split( ' ')); /* nesse exemplo separou o espaço*/
console.log(exemString.split(' ', 3)); /*nesse exemplo cito o numero de vezes que se dividir*/




