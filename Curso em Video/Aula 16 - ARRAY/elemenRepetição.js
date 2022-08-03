let valores = [8, 5, 6 , 9 , 7 , 4, 2]

for(let pos=0; pos < valores.length; pos++){
console.log(`pos recebe o valor ${pos} referente a posicao ${valores [pos]}`)}


for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

pos = valores.indexOf(12)
if (pos === -1) {
    console.log(`este valor não foi encontrado tente novamente`)
} else {console.log(`O valor encontrado é igual a ${pos}`)}

   

 // indexOf serve para encontrar a posição do elemento
