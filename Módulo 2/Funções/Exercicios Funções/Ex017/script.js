const Aumento = (plano, salario) => {

    switch (plano) {
        case 'A':
            return salario * 1.1 //aumento de 10%
        case 'B':
            return salario * 1.15 //aumento de 15%
        case 'C':
            return salario * 1.2 //aumento de 20%
        default:
            return 'plano inválido'
    }

}

console.log(Aumento('A', 1000))
console.log(Aumento('B', 1000))
console.log(Aumento('C', 1000))