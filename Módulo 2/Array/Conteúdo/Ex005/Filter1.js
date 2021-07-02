// Forma de percorrer um array com propósito//
// Serve para filtrar um array //
//Dentro de um filter é possível passar 3 parâmetros( 1 o valor, 2 o indice, 3 e o array)

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "Ipad", preco: 4499, fragil: true },
    { nome: "Como De Vidro", preco: 2.49, fragil: true },
    { nome: "Como De plastico", preco: 1.49, fragil: false }
]


console.log(produtos.filter(function (elemento) {
    if (elemento.preco > 500 && elemento.fragil === true) {
        return elemento
    }
}))

// Ou

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil === true;

const resultado = produtos.filter(caro).filter(fragil)

console.log(resultado)



