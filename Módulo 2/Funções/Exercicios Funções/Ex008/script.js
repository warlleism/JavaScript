let arrayPontuacoes = [30, 40, 20, 4, 51, 25, 42, 38, 56]

function avaliaPontucao(array) {
    let pontuacao = array
    let records = 0
    let maiorPontuacao = pontuacao[0]
    let menorPontuacao = pontuacao[0]

    for (let i = 0; i < pontuacao.length; i++) {
        if (pontuacao[i] > maiorPontuacao) {
            maiorPontuacao = pontuacao[i]
            records++
        } else if (pontuacao[i] < menorPontuacao) {
            menorPontuacao = pontuacao[i]
        }
    }
    return ['Maior Pontuação: ' + maiorPontuacao, 'Menor Pontuação: ' + menorPontuacao, 'Record: ' + records]
}
console.log(avaliaPontucao(arrayPontuacoes))