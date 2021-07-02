const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'B40',
    velMax: 200
}

//Acessando o protótipo do objeto( quem é meu super objeto (pai))
//Buscando  elementos no prototipo pai que não foram encontrados no objeto ferrari
//__proto__ = Forma de se acessar o atributo dentro do objeto pai

console.log(ferrari.prototype)//Prototype esta apenas em funções
console.log(ferrari.__proto__)//Retorna um obj vazio mas ele existe
console.log(ferrari.__proto__ === Object.prototype)//PAI - mais alto nível

console.log(volvo.__proto__=== Object.prototype)
console.log(Object.prototype.__proto__)//Objetc.prototype tem um prototipo acima dele?

function  meuObjeto() {
    console.log(typeof Object, typeof meuObjeto)
}

meuObjeto()