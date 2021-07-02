const alunos = [
    {
        nome: 'joão',
        nota: 7.3,
        bolsista: false
    },
    {
        nome: 'warllei',
        nota: 4.7,
        bolsista: true
    },
    {
        nome: 'maria',
        nota: 5.3,
        bolsista: false
    },
    {
        nome: 'fernando',
        nota: 2.7,
        bolsista: true
    }
]

const getNota = function (valores) {//Estrutura do map
    return valores.nota
}

const soma = function (valorAtual, agregado) {
    return valorAtual + agregado
}

const resultado = alunos.map(getNota).reduce(soma)

console.log(resultado / alunos.length)