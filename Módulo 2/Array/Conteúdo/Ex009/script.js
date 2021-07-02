//FlatMap - Map associado com concat
//Retorna um único array concatenando todos arrays

const escola = [{
    nome: 'Turma m1',
    alunos: [{
        nome: 'Warllei',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma m2',
    alunos: [{
        nome: 'Rebecca',
        nota: 8.9,
    },
    {
        nome: 'Roberto',
        nota: 7.3

    }]
}]


const getNota = function (alunos) {
    return alunos.nota
}

const getNotasTurma = function (turma) {
    return turma.alunos.map(getNota)
}


const notas1 = escola.map(getNotasTurma)


console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasTurma)

console.log(notas2)