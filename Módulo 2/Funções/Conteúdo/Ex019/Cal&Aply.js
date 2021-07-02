function getPreco(imposto = 0, moeda = 'RS'){
    return `${moeda} ${this.preco * (1-this.desc) * (1 + imposto)} `
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco//Como já se tem uma função com esse nome, é so colocar assim que ele vai criar um atributo chamado getPreco e vai associar a função criada acima
}

globalThis.preco = 20
globalThis.desc = 0.1

console.log(getPreco())//neste contexto do global o preco e desc não estão definidos

console.log(produto.getPreco())



// Call e Aply //

// Quando se chama uma function do tipo call, deve-se passar diretamente nos parâmetros do call cada um dos parâmetros que serão passados para a função
// Primeiro 1 Parâmetro = ex OBJ
// Segundo 2 Parâmetro = parâmetros da função
const carro  = {
    preco: 49990,
    desc: 0.20,
}

console.log(getPreco.call(carro))// .call - é para chamar a função//passando como contexto para execução o obj carro

console.log(getPreco.call(carro, 0.17, '$'))// .call - é para chamar a função//passando como contexto para execução o obj carro

console.log(getPreco.apply(carro, [0.17, '$']))// .apply - Faz a mesma coisa que o .call / Os parâmetros saão passados dentro de um array


