class lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { //(... = concatena os parâmetros (aceita parâmetros variáveis))
        lancamentos.forEach(l => this.lancamentos.push(l))//Adicionando parâmetros/valores ao array
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(function (l) {
            valorConsolidado += l.valor//pegando apenas o valor no forEach
        })
        return valorConsolidado
    }
}

const salario = new lancamento('Salario', 45000)
const contaDeLuz = new lancamento('Luz', -220)//Valores negativos para debito

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario())