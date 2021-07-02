//Do while - garante que pelo menos haja uma repetição no laço

const getInterRando = function (min , max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


let opcao = -1

do{
    opcao = getInterRando(-1, 10)
    console.log(`${opcao}`)
}while(opcao != -1)
