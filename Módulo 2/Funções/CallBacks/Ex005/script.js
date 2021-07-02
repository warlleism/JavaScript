const radar = (velocidade) => {

    let multa = 0

    if (velocidade <= 70) {
        return 'Dentro do limite de velocidade'
    } else if (velocidade > 70) {
        const pagamento = Math.floor((velocidade - 70) / 5 * 10)
        const pontos = Math.floor((velocidade - 70) / 5)
        console.log('Acima do limite de velocidade. Multado!')
        multa += pagamento
        console.log(`Valor a ser pago: ${multa}R$`)

        if (pontos >= 12) {
            console.log('Carteira Suspensa!')
            console.log('Pontos na carteira:', pontos)
        } else {
            console.log('Pontos: ', pontos)
        }
    }

}

radar(130)