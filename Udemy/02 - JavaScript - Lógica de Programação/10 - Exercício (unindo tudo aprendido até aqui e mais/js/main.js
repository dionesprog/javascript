// 1º passo Captuar evento de submit do formulario
const form = document.querySelector('.formulario'); // obteve o formulario

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); // pegar o input  que e digitado peso
    const inputAltura = e.target.querySelector('#altura'); // pegar o input inteiro Altura

    const peso = Number(inputPeso.value); //pegar o valor digitado peso
    const altura = Number(inputAltura.value); //pegar o valor digitado altura

    if (!peso) { // se for diferente de peso retorna mensagem
        setResultado('Peso inválido', false);
        return; // finalizo o codigo
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`

    setResultado(msg, true); 

});


    function getImc (peso, altura){
       const imc = peso / altura ** 2; 
        return imc.toFixed(2);
    }


function getNivelImc(imc) {
    const nivel = ['Abaixo do Peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesiade grau 2', 'Obesidade grau 3'];

    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    }




    function criaParag() {
        const p = document.createElement('p'); //criado um paragrago com nome de p
        return p;
    }


        function setResultado (msg, isvalid) {
            const resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';
            
        

        
        
        const p = criaParag();

        if (isvalid) {
            p.classList.add('paragrafo-resultado');
        } else {
            p.classList.add('incorreto');
        }

        p.innerHTML = msg;
        resultado.appendChild(p)

        resultado.innerHTML = '';
    }

}
