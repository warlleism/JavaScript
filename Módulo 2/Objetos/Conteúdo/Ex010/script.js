// JSON VS OBJECT //

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))//JSON.stringify() converte valores em javascript para uma String JSON

//Atributos com aspas duplas
//Valores como strings usar aspas duplas, numeros sem aspas

console.log(JSON.parse('{"a":1,"b":2,"c":3}'))//Convertendo JSON para Objeto

console.log(JSON.parse('{"a":1, "b":true, "c":"Warllei"}'))