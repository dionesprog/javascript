let num = [3, 4, 5];
num.push(6, 2, 9, 7);
console.log(num);
console.log(num.length); //traz o total de elementos
console.log(num.sort()); // traz os elementos de forma ordenada


console.log(`O nosso vetor é ${num}`);


//estrutura de repetição for recebe for ( inicialização ; teste lógico ; incremento )
for(let pos=0; pos<num.length;pos++){
    console.log(num[pos]);
}

// estrutura de repetição for recebe for in ( indice ; variavel composta )

for (let pos in num){  // para cada posição na variavel num mostrar
console.log(num[pos])
}