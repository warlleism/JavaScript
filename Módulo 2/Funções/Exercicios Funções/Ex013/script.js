const diaUtil = (valor) => {
    console.log("True = Dia Util // False = Não é dia util")
    switch (valor) {
        case 1:
            return (false + ' Domingo')

        case 2:
            return (true + ' Segunda')

        case 3:
            return (true + ' Terça')

        case 4:
            return (true + ' Quarta')

        case 5:
            return (true + ' Quinta')

        case 6:
            return (true + ' Sexta')

        case 7:
            return (false + ' Sabado')
    }
}

console.log(diaUtil(4))