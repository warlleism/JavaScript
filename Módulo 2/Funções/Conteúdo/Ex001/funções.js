// Criar de forma literal

function fun1(){

}

//Armazena em variável

const fun2 = function(){

}

//Armazenar em um array

const array = [function (a,b){return a + b}]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto

const obj = {
    nome: function (a,b) {return a + b}
}
console.log(obj.nome(2,3))

//Ou

obj.falar = function (){return 'Opá'}
console.log(obj.falar())

//Passar função como parâmetro para outra função

function run(fun){
    fun()//Essa chamada diz que ser no parâmetro fun(acima) não for passado uma função ele dará erro
}

run(function (){console.log('Olá Mundo!')})

//Uma função pode retornar/conter uma função

function soma(a,b){
    return function(c){
        return a+b+c
    }
}

console.log(soma(2,3)(4))

//Ou chamar assim

const soma1 = soma(2,3)
console.log(soma1(4))