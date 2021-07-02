Number.prototype.enter = function (inicio, fim){
    return this >= inicio && this <= fim
}
const imprimirResult = function (nota){
    if(nota.enter(9,10)){
        console.log('Quadro de honra')
    }else if(nota.enter(7,8)){
        console.log('Aprovado')
    }else if(nota.enter(4,6)){
        console.log('Recuperação')
    }else{
        console.log('Reprovado')
    }
}

imprimirResult(8)