const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "KitdeLapis", "preco": 41.22}'
    
]

const paraObjeto = json => JSON.parse(json)

const ApenasPreco = callback => callback.preco

const resultado = carrinho.map(paraObjeto).map(ApenasPreco)

console.log(resultado)