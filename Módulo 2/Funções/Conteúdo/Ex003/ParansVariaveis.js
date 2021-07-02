// Arguments = Recupera parâmetros
// Arguments = é um array [] 
function soma (){
    let soma = 0
    for(i in arguments){//Aqui ele pega o parâmetro passado na invocação
        soma += arguments[i] 
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))