
// if pode ser usado sozinho
// sempre que utilizo a palavra else, preciso de um if antes
// pode ser ter varios else if na checagem
// só pode ter um else na checagem
// pode utilizar condiçao sem else if

const hora = 11.59;
if (hora < 12){
    console.log(`bom dia`);
} else if (hora >= 12 && hora <= 17){
    console.log(`boa tarde`);
} else if (hora > 17 && hora < 24){
    console.log(`boa noite`);
} else console.log(`ola`);