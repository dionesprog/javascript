/* 

function meuEscopo () {
    const form = document.querySelector('.form'); //função de selecionar uma classe ou ID
     

    form.onsubmit = function (evento) {
        evento.preventDefault(); // tem a função definir o que era para acontecer por padrão
        alert(1);
       console.log('Foi enviado.'); 
    };    
}
meuEscopo();

*/

function meuEscopo() {
    const form = document.querySelector('.form'); //função para selecionar uma classe ou objeto
    const resultado = document.querySelector('.resultado'); //função para selecionar uma classe ou objeto

    const pessoas = [] //array para pegar os dados do formulario

    function recebeEventoForm(evento) {
        evento.preventDefault(); //evita que o dado seja enviado automaticamemte para servidor que e a forma padrão

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({           // push para criar objeto adicionar dados dentro do array 
            nome: nome.value,    // value para buscar o valor digitado
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }
    form.addEventListener('submit', recebeEventoForm); //fica obesrvando ate alguem clicar adiciona um escutador de eventos no formulario obs addeventListener recebe uma função que no caso foi recebeEventoForm.
}
meuEscopo();