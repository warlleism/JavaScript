const  pilotos = ['Vettel','Alonso','Raikkonen','Massa']

// Pop - Remove o ultimo elemento do array //

pilotos.pop()

// Shift - Revome o primeiro elemento do array

pilotos.shift()

// Push - adiciona um novo elemento no final do array //

pilotos.push('Verstappen')


// Unshift - Adiciona um novo elemento na primeira posição

pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice - pode adicionar e remover elementos

pilotos.splice(2,0, 'Barriquelo')


// Splice - remover

pilotos.splice(3)//apagara do indice 3 pra frente

// Slice - Gera um novo array pegando apartir do parÂmetro passado

const algunsPilotos = pilotos.slice(1)// pilotos.slice(1,4)//Pega até o indice 4 porém não adiciona o indice 4
console.log(algunsPilotos)



console.log(pilotos)
