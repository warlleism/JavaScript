// Tipos em JavaScript: Number

const pessoa1 = 2
const pessoa2 = 5
console.log(Number.isInteger(pessoa1))// isInteger - ver se o número é inteiro

console.log("///////////////////////////////////////////")

const avaliação1 = 9.8102
const avaliação2 = 8.6543

const  total = avaliação1 * pessoa1 + avaliação2 * pessoa2
const media = total / (pessoa1 + pessoa2)

console.log(media.toFixed(2))//toFixed - aparecer  2 números após a virgula
console.log(media.toString())//toString - Converter valor para string
console.log(media.toString(2))//toString - Converter valor para string e binário
console.log(typeof media)//typeof - Mostra o tipo do elemento
