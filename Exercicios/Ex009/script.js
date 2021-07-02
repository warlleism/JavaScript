const retornandoInverso = (valor) =>{

    const tipo = typeof valor //Vai retornar uma string do tipo number ou boolean

    if(tipo == "boolean"){
        return !valor
    }else if(tipo == "number"){
        return valor
    }else{
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }
}

console.log(retornandoInverso(true))
console.log(retornandoInverso(10))
console.log(retornandoInverso("Programação"))