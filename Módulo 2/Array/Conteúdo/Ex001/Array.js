 console.log(typeof Array, typeof new Array, typeof [])//Operador new junto de uma função cria um objeto

let aprovado = new Array('Bia','Clara','Ana')//Criando apartir do operador new(não recomendado)

console.log(aprovado)

const aprovados = ['Bia','Clara','Ana']
console.log(aprovados)
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Warllei'
console.log(aprovados)

aprovados.push('Rafael')//Adiciona elemento e também substitui elementos

console.log(aprovados.length)//Ver quantidade de elementos no array

aprovados.sort()//Coloca os elementos em ordem numérica e alfabética

console.log(aprovados)

delete aprovados[0]//Deletando elementos de um array

console.log(aprovados.length)

console.log(aprovados)

//Serve para adicionar e remover elementos em um determinado indice

aprovados.splice(1,2,'elemento1' , 'elemento2')//Escolhe o indice e a quantidade de elementos que serão excluidos apartir do indice e adicionando 2 elementos no lugar

console.log(aprovados)





