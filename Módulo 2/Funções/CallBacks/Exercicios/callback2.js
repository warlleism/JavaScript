const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)



//Com callback

const notas2 = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notasBaixas2 = notas2.filter(function (elementosDentroArray) { //Função que vai filtrar os elementos de um array em cima de um determinado critério
                                                    //Essa função será invocada para cada um dos elementos
    return elementosDentroArray < 7
})

console.log(notasBaixas2)



//OU



const notas3 = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notasBaixas3 = notas3.filter((nota) => {                                            
    return nota < 7
})

console.log(notasBaixas3)



//OU


const notas4 = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notasBaixas4 = notas4.filter( nota => nota < 7) 
                                  

console.log(notasBaixas4)


//OU



const notas5 = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notaMenorQue7 = nota => nota < 7
const notasBaixas5 = notas5.filter(notaMenorQue7)

console.log(notasBaixas5)


