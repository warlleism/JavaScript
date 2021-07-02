function soBoaNoticia(nota){
    if(nota >= 7){
        return 'Aprovado'
    }
}

console.log(soBoaNoticia(10))

function seForVerdadeiro(valor){
    if(valor){
        return 'É verdadeiro...' + valor
    }else{
        return 'É falso...' + valor
    }
}

console.log(seForVerdadeiro(null))
console.log(seForVerdadeiro(undefined))
console.log(seForVerdadeiro(2))
console.log(seForVerdadeiro([2]))
