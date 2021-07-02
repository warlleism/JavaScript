const salario = (horasTrabalhadas, recebePorHora) => {
    return `Salário igual a R$ ${horasTrabalhadas * recebePorHora}`
}

console.log(salario(40.5, 150))