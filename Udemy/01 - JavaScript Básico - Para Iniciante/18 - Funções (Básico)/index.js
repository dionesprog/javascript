function saudacao (nome) {       //saudacao é o nome da função //dentro dos () temos os paramentros são dados que podem ser enviados
                                    //valor entre {} é o corpo da função
    return `Bom dia! ${nome}!`;     // valor que a função vai receber
}

//const variavel = saudacao('Diones') // função finalizada com parentes e o resultado
//console.log(variavel);

/* function soma (x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
*/

/* função para trazer a raiz quadrada
const raiz = function (n) {
    return n ** 0.5;
};
  
console.log(raiz(16));
*/

/*
//outra forma de fazer função earl function exemplo abaixo

const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));

*/

raio = Number(window.prompt(`Digite o Raio?`));
comprimento = 2 * Math.PI * raio
area = Math.PI * raio * raio
resultado = Number(comprimento * area)
