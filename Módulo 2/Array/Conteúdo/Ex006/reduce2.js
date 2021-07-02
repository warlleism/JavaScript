
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
//acumulador  //valorAtual
const TodosBolsistas = function (resultado, bolsista) {//Estrutura para o reduce
    return resultado && bolsista
}
const resultado = alunos.map((valor) => valor.bolsista).reduce(TodosBolsistas)


const algunsBolsistas = function (resultado, bolsista) {//Estrutura para o reduce
    return resultado || bolsista
}

const resultado2 = alunos.map((valor) => valor.bolsista).reduce(algunsBolsistas)

console.log(resultado)

console.log(resultado2)
