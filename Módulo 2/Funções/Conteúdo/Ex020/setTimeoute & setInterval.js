//setTimeout e setInterval

//setTimeout - não roda infinitamente

let  valor = 0


setTimeout(function () {//callback//função como parâmetro//Função Assícrono
    for(let i = 0; i < 10; i++){
        valor+=1
        console.log(valor)
    }
}, 3000)

//Assícrono - espera o tempo de 2 segundos para ser executado

//setInterval - intervalo// fica rodando infinitamente

setInterval(function () {//callback//função como parâmetro//Função Assícrono
    for(let i = 0; i < 10; i++){
        valor+=1
        console.log(valor)
    }
}, 3000)

