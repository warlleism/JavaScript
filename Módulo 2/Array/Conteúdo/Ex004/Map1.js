// Map - Laço que será executado. serve para fazer uma transformação no array //
//A ideia é Mapear um array para um outro array de mesmo tamanho mas com os dados transformados//mapea um array criando um novo e o transformando

const nums = [1, 2, 3, 4, 5]

console.log(nums)

// For com propósito //
// Função no map pode receber 3 parâmetros (1 valor,2 indice,3 array completo)

let resultado = nums.map((valor) => {
    return valor * 2
})

console.log(resultado)

const soma10 = elemento => elemento + 10

console.log(nums.map(soma10))

const triplo = elemento => elemento * 3

console.log(nums.map(triplo))

const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

console.log(nums.map(paraDinheiro))

// Como todos resultados retornam um array então pode ser encadeado
//Concatenanto todos arrays e mudando seus valores
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)