const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function retorno(valor) {
    let newArray = []
    for (n in valor) {
        newArray.push(valor[n])
    }

    return newArray
}

console.log(retorno(arr))