//Gerar valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // 1 pq o é o índice do b, a indice = 0 , b indice = 1, c indice = 2
    c = isNaN(c) ? 1 : c // Mais seguro de usar
    return a + b + c
}

console.log(soma2(0,0,0),soma2(),soma2(3))



//Como é feito hoje em dia

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3())



