//Concat usado para concatenar 2 ou mais arrays

const alunos1 =
    [
        {
            nome: 'joão',
            nota: 7.3,
            bolsista: false
        },
        {
            nome: 'warllei',
            nota: 4.7,
            bolsista: true
        }
    ]

const alunos2 =
    [
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

const alunos = alunos1.concat(alunos2, 'Rafael')
console.log(alunos)

console.log([].concat([1,2], [3,4], [[5,6]]))
