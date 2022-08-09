// 1º passo Captuar evento de submit do formulario

const form = document.querySelector('#formulario');
form.addEventListener('submit', function(evento){ // essa funcao captura valor digitado
evento.preventDefault(); //serve para deixar formulario ser enviado

const inputPeso = evento.target.querySelector('#peso'); // selecione id peso
const inputAltura = evento.target.querySelector('#altura'); // seleciono id altura

const peso = Number(inputPeso.value); 
const altura = Number(inputAltura.value);

if (!peso) {
    setResultado('Peso Inválido', false);
    return; // para a função aqui
}

if (!altura) {
    setResultado('Altura Inválida', false);
    return; // para a função aqui
}


const imc = getImc(peso, altura);
const nivel = getNivelimc (imc);
 
const msg = `Seu IMC é ${imc} (${nivel}).`;

setResultado(msg, true);

});

function getNivelimc(imc){
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobre Peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) {
        return nivel [5]
      }  else if (imc >= 34.9){
        return nivel [4]
      }  else if (imc >= 29.9){
        return nivel [3]
      }  else if (imc >= 24.9){
        return nivel [2]
      }  else if (imc >= 18.5){
        return nivel [1]
      } else if (imc < 18.5)
      return nivel[0];
    }

function getImc (peso, altura){
const imc = peso / altura ** 2;
return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');  // create serve para criar elemento
    return p;
}

// essa funcção serve para colocar uma mensage html dentro da div resultado
function setResultado (msg, isvalid){
const resultado = document.querySelector('#resultado');
resultado.innerHTML = '';


const p = criaP();

if (isvalid) {
    p.classList.add('paragrafo-resultado');
} else  {
    p.classList.add('incorreto');
}

p.innerHTML = msg;
resultado.appendChild(p); //adiciona resultado a div

}


   





