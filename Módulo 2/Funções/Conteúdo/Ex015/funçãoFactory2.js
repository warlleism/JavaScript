
function criarProduto(nome, valor){
    return{
        nome,//nome é valor não precisam de seus valores pois serão definidos na chamada da função
        valor
    }

}

const Produtos1 = new criarProduto("Feijão",25)
console.log(Produtos1)

const Produtos2 = new criarProduto("Arroz", 15)
console.log(Produtos2)

const Produtos3 = new criarProduto("Miojo", 1.50)
console.log(Produtos3)

//Ou

console.log(criarProduto('Doritos', 30))