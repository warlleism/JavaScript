const calculadora = (num1, num2, operador) => {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return 'inválido!'
    }
}

console.log(calculadora(10, 5, '+'))
console.log(calculadora(10, 5, '-'))
console.log(calculadora(10, 5, '*'))
console.log(calculadora(10, 5, '/'))
console.log(calculadora(10, 5, '//'))