const comparacao = (a,b) =>{
    if(typeof a != typeof b){
        return false
    }else if ( a == b){
        return  'Valores Iguais'
    }else if( a > b){
        return `${a} é maior que ${b}!`
    }
}

console.log(comparacao(11,'asdasd'))


//Ou

const maiorOuIgual = (primeiro, segundo) => {
    if (typeof primeiro != typeof segundo) {
        return false
    }else if(primeiro >= segundo){
        return true
    }

    
}

console.log(maiorOuIgual(10, 2))
console.log(maiorOuIgual(1,1))

//Ou

const comparacao2 = (a, b) => {
    if (typeof a != typeof b) {
        return false + ' São de tipos diferentes'
    } else if (typeof a == typeof b && a > b) {
        return `Valores Iguais & ${a} é maior que ${b}!`
    } else if (typeof a == typeof b && a < b) {
        return `Valores Iguais & ${a} é menor que ${b}!`
    }
}

console.log(comparacao2(20, 11))