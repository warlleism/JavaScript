function Inverso(valor) {
    if (valor === true || valor === false) {
        return !valor
    } else {
        return -valor
    }
}

console.log(Inverso(false))
console.log(Inverso(10))

// OU

function inverso2(valor) {
    const tipo = typeof valor;

    if (tipo == "number") {
        return -valor
    } else if (tipo == "boolean") {
        return !valor
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }
}

console.log(inverso2(10))
console.log(inverso2(true))

