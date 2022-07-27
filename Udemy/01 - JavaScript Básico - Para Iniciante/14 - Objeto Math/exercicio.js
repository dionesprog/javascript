const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML += numero;
texto.innerHTML += `<p>A raiz quadrada é: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `${numero} é inteiro: ${(Number.isInteger(numero))}</p>`;
texto.innerHTML += `<p>É NAN ${(Number.isNaN(numero))}</p>`;
texto.innerHTML += `<p>Arredondamdo para valor inferior${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondamdo para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
