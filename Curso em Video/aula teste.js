/* 1 escreva uma função - function
   2 coloque os paratenses - function ()
   3 dentro dos parentes recebe os parametros - function (valor1, valor2)
   4 depois ela recebe o bloque que executa a função por chaves 
   */
   
   
   function soma (valor1, valor2){
    return valor1 + valor2;
   }
   let total = soma(18, 12)
   console.log(total);

   function realDolar (real, cotacaoDolar){
    return real * cotacaoDolar

   }
  let cotacao = realDolar(5, 1.8);
  console.log(cotacao);

 function paraCelsius (temp){
 return (temp - 32) / 1.8
 }
let celsius= paraCelsius(77);
console.log(celsius.toFixed(0));