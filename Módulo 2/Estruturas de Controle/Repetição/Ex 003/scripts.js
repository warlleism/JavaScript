const pessoa = {
    nome: "Warllei",
    idade: 25
}

//Key-Value
for(let chave  in pessoa){
    console.log(chave,pessoa) // Para mostrar chaves e valores no objeto
    console.log(`Mostrando apenas o nome ${pessoa.nome}`)
    console.log(`Mostrando apenas o nome ${pessoa['nome']}`) // outra forma de  valores
    console.log(`Mostrando apenas a idade ${pessoa.idade}`)
    console.log("/////////////////////////////")
}