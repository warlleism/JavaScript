const Fatorial = (num) => {
    let resultado = num
    for (let i = 1; i < num; i++) {
        resultado = resultado * i
        console.log(resultado)
    }
    return (resultado)
}

console.log(Fatorial(10))