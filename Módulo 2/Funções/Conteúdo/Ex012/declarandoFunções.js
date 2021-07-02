//Function declaration
//Podem ser chamadas antes da função, pois o interpretador do JS carrega todas as Function declaration antes

function soma (x , y){
    return x + y
}

//Function expression

const sub = function (x,y){
    return x - y
}

//Named function expression
//É bom para encontrar o nome da função em mensagens de erro como no stack tracer

const mult = function mult(x,y){
    return x * y
}

