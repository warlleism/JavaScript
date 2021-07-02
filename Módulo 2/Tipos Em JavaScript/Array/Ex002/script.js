//Percurso para exibição em vetores

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var i = 0; i < 10; i++) {
    console.log(array[i])
}

console.log("/////////////////////////////////////////////////")

// Usando o for in //Levando em consideração a quantidade de elementos dentro do array

for (var posicao in array) {
    console.log(`Na posição ${posicao} tem o valor ${array[posicao]}`)
}