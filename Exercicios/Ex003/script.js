//Velocidade máxima de até 70
//A cada 5km acima do limite ganha 1 ponto
//Método para arredondar valor - Math.floor()
//Ponto acima de 12 == carteira suspença

function radar(velocidade) {
    if (velocidade <= 70) {
        console.log('No limite de velocidade.')
    } else if (velocidade > 70) {
        const pontos = Math.floor((velocidade - 70) / 5)
        console.log('Excesso de velocidade. Multado!')
        if (pontos >= 12) {
            console.log('Carteira Suspensa!')
            console.log('Pontos na carteira:', pontos)
        }else{
            console.log('Pontos: ', pontos)
        }
    }
}

radar(130)
