const getInteiroRandom = function (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroRandom(-1, 10)
    console.log(`${opcao}`)
}


