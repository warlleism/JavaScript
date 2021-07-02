const mediaPonderada = (codigo, nota1, nota2, nota3) => {

    let maiorNota = nota1 * 4
    let notaDois = nota2 * 3
    let notaTres = nota3 * 3
    media = (maiorNota + notaDois + notaTres) / 10

    return media < 5 ? 'Reprovado' : 'Aprovado'

}

console.log(mediaPonderada(123, 2.8, 6, 3.5))

// Ou 

const mediaPonderada2 = (codigo, nota1, nota2, nota3) => {
    let maiorNota = nota1 * 4
    let notaDois = nota2 * 3
    let notaTres = nota3 * 3
    media = (maiorNota + notaDois + notaTres) / 10

    if (media >= 5) {
        return `Código do Aluno: ${codigo}: Aprovado - Nota ${media}`;
    } else {
        return `Código do Aluno:${codigo}: Reprovado - Nota ${media}`;
    }
}

console.log(mediaPonderada2(123, 6.5, 6.5, 6.7))

// Ou

const mediaPonderada3 = (codigo, nota1, nota2, nota3) => {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort()

    mediafinal = (notas[0] * 3 + notas[1] * 3 + notas[2] * 4) / 10

    if (media >= 5) {
        return `Código do Aluno: ${codigo}: Aprovado - Nota ${mediafinal}`;
    } else {
        return `Código do Aluno:${codigo}: Reprovado - Nota ${mediaFinal}`;
    }
}

console.log(mediaPonderada3(123, 6.5, 6.5, 6.7))

