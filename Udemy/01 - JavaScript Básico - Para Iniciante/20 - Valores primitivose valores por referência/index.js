/* tipos de dados primitivos
Primitivos (valore imutáveis) - string, number, boolean, undefined, null (bigint, symbol) -
valores copiados

Referência (mútavel) - array, object, function - valores passados por referência e criado uma referência do mesmo valor na memória.

*/

/* primitivos
let a = 'A';
let b = a; // cópia
console.log(a, b);

a = 'outracoisa';
console.log(a, b);
*/

let a = [1, 2, 3];
b = a;
console.log(a, b);
a.push(4);
console.log(a, b); // nesse caso por ser um valor mutavel que pode ser alterado ambos apontam para o mesmo valor na memoria quando se modifica a o valor de b tambem e modificado trazendo o mesmo resultado

