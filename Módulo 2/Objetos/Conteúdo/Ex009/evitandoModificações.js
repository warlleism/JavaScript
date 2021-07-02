//Object.preventExtesions - Previnir que o objeto não seja extendido(não vai conseguir aumentar o número de atributos no objeto)

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})

produto.codigo = 132342//não sera adicionado

console.log(produto)


// Object.seal - Selar (não consegue adicionar novos atriburos, excluir. só se pode modificar os valores)

const pessoa = Object.seal({
    nome:'Juliana',
    idade: 25
})

//Ou

Object.seal(pessoa)

pessoa.altura = 1.89;

console.log(pessoa)

// Object.freeze = selado + valores constantes(nao pode adicionar,excluir nem modificar)

const pessoa2 = Object.freeze({
    nome:'Juliana',
    idade: 25
})

//ou

Object.freeze(pessoa2)

pessoa2.altura = 1.89;
pessoa2.nome = 'Rafael'

console.log(pessoa2)

