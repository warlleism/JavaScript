const Lanchonete = (codigo, quantidade) => {
    switch (codigo) {
        case 100:
            return `Quantidade: ${quantidade} Pagar - R$ ${quantidade * 3}`;
        case 200:
            return `Quantidade: ${quantidade} Pagar - R$ ${quantidade * 4}`;
        case 300:
            return `Quantidade: ${quantidade} Pagar - R$ ${quantidade * 5.50}`;
        case 400:
            return `Quantidade: ${quantidade} Pagar - R$ ${quantidade * 7.50}`;
        case 500:
            return `Quantidade: ${quantidade} Pagar - R$ ${quantidade * 3.50}`;
        case 600:
            return `Quantidade: ${quantidade} Pagar - R$ ${quantidade * 2.80}`;
        default:
            return "Produto não existente"
    }
}

console.log(Lanchonete(300, 3))
console.log(Lanchonete(600, 2))
console.log(Lanchonete(300, 4))
console.log(Lanchonete(500, 1))
console.log(Lanchonete(200, 2))
