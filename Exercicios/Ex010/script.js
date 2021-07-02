const mult = (num1 , num2 ) => {
    if(num1 >= 0 && num2 >= 0){
        return Math.imul(num1,num2)
    }else{
        return 'Valores Negativos não são válidos!'
    }
}

console.log(mult(1,10))

//Ou 

const muntiplicacao = (num1 , num2) => {
    let resultado = 0

    for(let i = 0; i < num2; i++)
        resultado += num1
        return resultado   
}

console.log(muntiplicacao(1,10))