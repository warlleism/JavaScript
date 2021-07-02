//Sempre que um número tiver resto 1 será arredondado com 1 ponto pra cima

function arredondar(nota){
    if(nota % 2 > 0){
        return nota + (2 - (nota % 2))//Sempre dará resto 1
    }else{
        return nota
    }
}

console.log(arredondar(13))
console.log(arredondar(19))
console.log(arredondar(17))

console.log('///////////////////////////////////')

function arredondarQualquerNumero(nota){
    if(nota === 55){
        return nota + (nota % 10)//SEmpre arrendodando 5 notas
    }else{
        return nota
    }
}


console.log(arredondarQualquerNumero(55))

