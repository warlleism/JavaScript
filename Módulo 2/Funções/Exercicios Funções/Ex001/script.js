const Calculadora = (valor1, valor2) =>{
    let soma = valor1 + valor2;
    let sub = valor1 - valor2;
    let mult = valor1 * valor2
    let divi = valor1 / valor2
    return `Soma = ${soma}/ Subtração = ${sub}/ Multiplicação = ${mult}/ Divisão = ${divi}`
}

console.log(Calculadora(10,5))