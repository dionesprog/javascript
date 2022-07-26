window.alert('aprendo java');
window.confirm('Deseja cancelar?');
let num1 = Number (window.prompt('Digite um número?'));
let num2 = Number (window.prompt('Digite outro número?'));
let soma = num1 + num2;
window.alert(`O valor digitado é ${soma}`);

// Observação dentro das chaves da template string posso colocar a expressão pronta ex. ${num1 + num2}, porem dependo do código sendo mais complexo essa funcionalidade pode não ficar clara.