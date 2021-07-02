function retornarCerto(valor1 , valor2) {
    soma = valor1 + valor2
    console.log('R$ ' + soma.toFixed(2).replace('.', ','))
}

console.log(retornarCerto(0.1,0.2))