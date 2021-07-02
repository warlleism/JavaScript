function classificarAluno(nota){
    let notaCorrigida = arredondar(nota)
    if(notaCorrigida >= 40){
        return `Aprovado com nota ${notaCorrigida}`
    }else{
        return `Reprovado com nota ${notaCorrigida}`
    }
}



function arredondar(nota){
    if(nota % 5 >= 2){
        return nota + (5 - (nota % 5))//arredondando 5 pontos pra cima
    }else{
        return nota
    }
}
 

console.log(classificarAluno(52)) 
console.log(classificarAluno(78)) 
console.log(classificarAluno(53)) 
console.log(classificarAluno(30)) 
console.log(classificarAluno(38)) 
console.log(classificarAluno(88)) 
console.log(classificarAluno(61)) 
