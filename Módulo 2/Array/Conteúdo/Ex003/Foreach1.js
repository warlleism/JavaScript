//Dentro de um foreach é possível passar 3 parâmetros( 1 o valor, 2 o indice, 3 e o array)

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Reaquel']

aprovados.forEach((item) => {
    console.log(item)
})

console.log('////////////////////////////')


aprovados.forEach((valor, indice,array) => { //Passando um callback dentro da função
    console.log(`${indice + 1} - ${valor}`)
    console.log(array)
})//O primeiro parâmetro é o valor e o segundo é o indice

console.log('////////////////////////////')

aprovados.forEach((nome) => console.log(nome)
)

const exibirAprovados = aprovado => console.log(aprovado)

console.log('////////////////////////////')

aprovados.forEach(exibirAprovados)

console.log('////////////////////////////')

const exibir2 = function(valor){
    console.log(valor)
}

exibir2(aprovados)

