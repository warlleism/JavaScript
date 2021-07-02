const repeticao = (elemento, repeticao) => {
    let array = []

    for (let i = 0; i < repeticao; i++)
        array.push(elemento)
    return array
}

console.log(repeticao('cachorro', 5))


// Ou

function repetir(item, quantidade) {
    return Array(quantidade).fill(item)
}

console.log(repetir('Cachorro', 5))