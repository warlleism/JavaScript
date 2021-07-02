let nota = [24, 10, 40, 35, 20, 55, 60, 70, 19]

const avaliacao = (nota) => {
    let maiorNota = nota[0];
    let menorNota = nota[0];

    for (let i = 0; i < nota.length; i++) {
        if (nota[i] > maiorNota) {
            maiorNota = nota[i]
        } else if (nota[i] < menorNota) {
            menorNota = nota[i]
        }
    }
    return [maiorNota, menorNota]
}

console.log(avaliacao(nota))