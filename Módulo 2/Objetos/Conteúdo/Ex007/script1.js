// Funções Importantes dentro da função Objeto//

const pessoa = {
    name: 'Warllei',
    idade: 25,
    peso: 90
}

// Object.entries,keys,value

console.log(Object.keys(pessoa))//retornando as chaves

console.log(Object.values(pessoa))//retornando os valores

console.log(Object.entries(pessoa))//Arrays com chaves e valores


Object.entries(pessoa).forEach(function (item){//Percorrendo o array
    console.log("/////////////////")
    console.log(`${item[0]} : ${item[1]}`)
    console.log( item)
})

Object.entries(pessoa).forEach(([chave, valor]) =>{//desinstruturando os elementos de um array//tirando os elementod de dentro de uma array
    console.log("\\\\\\\\\\\\\\\\\\")
    console.log(`${chave} : ${valor}`)
})

// Object.defineProperty // //Definir uma propriedade de um objeto/A propriedade ode ou não ser alterada, ficara ou não visível

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    Writable: false,//não pode ser sobreescrita
    value: '04/03/1996'
})

pessoa.dataNascimento = '04/04/1996'
console.log(pessoa.dataNascimento)