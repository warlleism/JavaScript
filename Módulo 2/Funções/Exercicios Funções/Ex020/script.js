function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0

    let valorNota = calcularValorNota(valorSaque)

    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                valorSaque -= 1
                contador1++
                break
        }

        valorNota = calcularValorNota(valorSaque)
    }
    return `Notas de 100: ${contador100}, Notas de 50: ${contador50}, Notas de 10: ${contador10}, Notas de 5: ${contador5}, Notas de 1: ${contador1}`
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}



console.log(sacarDinheiro(153))