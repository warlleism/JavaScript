//Operador de desestruturação
//Tira da estrutura alguma coisa

const pessoa = {
    nome: 'Ana',
    idade: 4,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 671
    }
}

const { nome, idade } = pessoa//As chaves representam o operador de desestruturação// {} SERVEM PARA OBJETOS
console.log(nome, idade)

const { nome: n, idade: i } = pessoa//n e i = são variáveis ligadas as chaves
console.log(n, i)

const { endereco } = pessoa
console.log(endereco)

const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)