function calcularNotaFinal(codAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort()

    let mediaFinal = (notas[2] * 4 + notas[1] * 3 + notas[0] * 3) / 10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
    console.log(mediaFinal)
}

calcularNotaFinal(123, 6.5, 6.5, 6.7)