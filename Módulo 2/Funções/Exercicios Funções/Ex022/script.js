function Anuidade(mes, valor) {

    let anuidade = valor
    let atraso = mes - 1

    if (mes > 1 && mes <= 12) {
        anuidade = (anuidade * (1 + (5 / 100))**atraso).toFixed(2)
        return anuidade
    }else {
        return 'Mês inválido.'
    }
}

console.log(Anuidade(4, 100))






