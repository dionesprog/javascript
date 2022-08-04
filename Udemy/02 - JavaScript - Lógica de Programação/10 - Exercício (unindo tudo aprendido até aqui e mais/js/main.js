// 1º passo Captuar evento de submit do formulario
const form = document.querySelector('.formulario');
form.addEventListener('submit', function(e)  {
 e.preventDefault();
 console.log('evento')
});

function setResultado (msg){ // essa função serve para receber o resultado e mostrar ele na tela esse resultado vai para dentro da DIV criada
const resultado = document.querySelector('#resultado');
resultado.innerHTML = msg;

}



function imc(peso, altura) {
    const resultado = ((peso / (altura * altura)));

     if (resultado < 18.5) {
        console.log('Abaixo do Peso');
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        console.log('Peso normal');
    } else if (resultado >= 25 && resultado <= 29.9) {
        console.log('Sobrepeso')
    } else if (resultado >= 30 && resultado <= 34.9) {
        console.log('Obesidade grau 1')
    } else if (resultado >= 35 && resultado <= 39.9) {
        console.log('Obesiade grau 2')
    } else if (resultado >= 40 && resultado <= 100) {
        console.log('Obesidade grau 3')}
    
    
    return resultado.toFixed(2)
}

console.log(imc(80, 1.6));
