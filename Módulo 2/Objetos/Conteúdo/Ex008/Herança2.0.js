// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = 'D' //Nao recomendado
const avo = { attr1: 'A' }//O avo aponta para o Object.prototype
const pai = { __proto__: avo, attr2: 'B' }//Referênciando que o pai tem como prototipo o avo
const filho = { __proto__:pai, attr3: 'C' }//Referênciando que o filho tem como prototipo o pai

console.log(filho.attr1)//Filho não tem attr1, então ele no seu prototipo pai, e o mesmo ira buscar avo
console.log(filho.attr2)
console.log(filho.attr3)
console.log(pai.attr2)
console.log(pai.attr1)
console.log(pai.attr0)//O avo aponta para o Object.prototype
console.log(avo.attr0)//O avo aponta para o Object.prototype

