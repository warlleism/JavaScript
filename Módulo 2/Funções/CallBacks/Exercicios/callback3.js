const array = [1,2,3,4,5];

let novoArray = array.map((x)=>{
    return x * x
})

console.log(novoArray)//função anônima de callback para calcular o quadrado de cada elemento