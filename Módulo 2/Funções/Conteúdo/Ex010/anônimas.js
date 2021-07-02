const soma = function (x, y) {
    return x + y
}

const ImpriResult = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

ImpriResult(3,4)

ImpriResult(3,4,soma)

ImpriResult(3,4, function(x,y){
    return x - y
})

ImpriResult(3,4, (x,y) =>{
    return x - y
})

const pessoa = {
    falar : function(){
        console.log('Opa')
    },

    falarMais(){
        console.log('Opaaaaaaaa')
    }
}

pessoa.falar()
pessoa.falarMais()