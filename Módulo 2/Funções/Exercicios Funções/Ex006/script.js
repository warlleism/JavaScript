function Simples(capitalInicial, taxaJuros, TempoAplicacao) {
    juros = capitalInicial * taxaJuros * TempoAplicacao
    montante = capitalInicial + juros
    return 'R$ ' + montante.toFixed(2)
}

console.log(Simples(100, 10/100, 2))

function Composto(capitalInicial, taxaJuros, TempoAplicacao) {
    montante = capitalInicial * (1 + taxaJuros) ** TempoAplicacao
    return 'R$ ' + montante.toFixed(2)
}

console.log(Composto(100, 10/100, 2))