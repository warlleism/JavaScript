// Acumulador //
// 1 parâmetro valor inicial - responsável no indice 0 para o acumulo em diante//
//Pega o valor inicial e soma com os posteriores
// Acumulador + valorAtual
//reduzir / agregar os valores em um só

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
                                                                                
const resultado = alunos.map(function (valor) { return valor.nota }).reduce(function (acumulador, valorAtual) {//Vai partir do valor inicial 30 e somar com as notas seguintes dentro do array
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
},30)//passando um valor inicial

console.log(resultado)