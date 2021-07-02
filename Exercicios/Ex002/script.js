function fizzBuzz(entrada){
    if(typeof entrada !== 'number'){
        return 'Não é um número!'
    }
    else if(entrada % 5 === 0){
        return 'Buzz'
    }else if(entrada % 3 === 0){
        return'Fizz'
    }else{
        return 'FizzBuzz'
    }
}



const resultado = fizzBuzz(7);
console.log(resultado)