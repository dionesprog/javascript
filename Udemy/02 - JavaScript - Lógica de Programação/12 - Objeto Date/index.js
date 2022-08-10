//formçao parametro data
/*
const data = new Date(2019, 3, 20, 15, 55, 30); // ano, mes, dia, hora, minuto, segundo, milesimo de segundo
console.log(data.toString());
*/

//outro formato
/*

const data = new Date ('2019-04-20 20:15:58');
console.log(data.toString());
console.log('Dia', data.getDate()); // obtem o dia
console.log('Mês', data.getMonth()); // Mês começa do zero
console.log('Ano', data.getFullYear()); 
console.log('Hora', data.getHours()); 
console.log('Minuto', data.getMinutes()); 
console.log('Segundo', data.getSeconds()); 
console.log('Mil Segundo', data.getMilliseconds()); 
console.log('Dia da Semana', data.getDay()); // 0 - Domingo , 6 - sabado
console.log(Date.now()); // conta a data de milesimo de segundos

*/

function zeroAEsquerda (num) {
return num >= 10 ? num : `0${num}` // função para inserir zero a esquerda

}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return` ${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);