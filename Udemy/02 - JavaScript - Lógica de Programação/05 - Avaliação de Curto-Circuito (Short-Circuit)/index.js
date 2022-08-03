/* São as condições consideradas falsas no OU ||
FALSY
false
0
''""``
null / undefined
NaN
*/

/*
sempre que todas falsas forem avaliadas vai retornar o valor da ultima falsas
sempre que houver um condição verdadeira vair retornar o primeiro valor verdadeiro
*/

const a = 0;
const b = null;
const c = 'verdadeiro'
const d = NaN

console.log(a || b || c || d); // retonra valor de c 'verdadeiro'

const e = 0;
const f = null;
const g = false;
const h = NaN;

console.log(e || f || g || h); // retorna o valor de h NaN ultimo valor falso
