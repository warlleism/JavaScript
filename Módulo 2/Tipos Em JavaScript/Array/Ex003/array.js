var num = [5,6,1,2,3] //Criando um array

num.sort() // //Pega todos os valores do array e coloca em ordem crescente // Método interno

console.log(`Array em ordem crescente ${num}`) 
 
num[5] = 10  //Adicionando valor 10 no indice 5 do array

num.push(20) // Método para adicionar valores no final do array

console.log("Tamanho do array " + num.length) // Ver o comprimento de um array// Atributo length

console.log(`Todos valores dentro do array ${num}`)

console.log(`Valor no primeiro indice do vetor ${num[0]}`)

let pos = num.indexOf(5)
console.log(`Buscando valores dentro de um array // O valor 5 está na posição ${pos}`) // indexOf retorna a chave onde o valor se encontra/posição/indice



