//Funções callback são funções passadas como parâmetro

const mult = (a, b) => {
    return a * b
}

const somar = (a, b) => {
    return a + b
}

const calcular = (x, y, callback) => {
    if (x + y < 20) {
        console.log('Número Menor do que 20')//Um callback sempre será executado "DEPOIS" da função principal ser executada
        return callback(x, y);
    } else {
        console.log('Número Maior do que 20')
        return callback(x, y);
    }
}

let a = calcular(10,20, mult)
console.log(a)

let b = calcular(20, 10, somar)
console.log(b)