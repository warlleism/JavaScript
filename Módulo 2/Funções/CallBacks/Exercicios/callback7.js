function calculadora(a, b, callback) {
    console.log('O Resultado do calculo é: ')
    return callback(a , b)
}

function soma(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

const mult = (a, b) => {
    return a * b
}

console.log(calculadora(10, 5, soma))
console.log(calculadora(10, 5, sub))
console.log(calculadora(10, 5, mult))