//Não é callback
const calc = () => {
    console.log('Executando');
}

const soma = (a, b) => {
    let op = a + b
    console.log(op)
}

const mult = (a, b) => {
    let op = a * b
    console.log(op)
}

calc(soma(2,5))
calc(mult(2,5))



// OU

function  callback (num) {
    console.log("A Operação resultou em: " + num)
}


function  soma (a,b, callback) {
    let op = a + b 
    callback(op)//Executando uma função após outra ser executada
}

function  mult (a,b, callback) {
    let op = a * b 
    callback(op)//Executando uma função após outra ser executada
}





soma(2,4, callback)
mult(4,6, callback)

