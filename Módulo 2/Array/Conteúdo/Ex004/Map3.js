const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "KitdeLapis", "preco": 41.22}'
    
]

Array.prototype.map2 = function(callback){
    const newArray = [];
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i],i,this))//this = array atual
    }
    return newArray
}



const paraObjeto = json => JSON.parse(json)

const ApenasPreco = callback => callback.preco

const resultado = carrinho.map2(paraObjeto).map2(ApenasPreco)

console.log(resultado)