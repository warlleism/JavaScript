let dobro1 = (a) =>{
    return 2 * a
}

console.log(dobro1(2))

let dobro2 = (a) =>{//Caso tenha bloco tem que ter o return
    return 2 * a
}

console.log(dobro2(2))


let dobro3 = a => 2 * a //Permitido quando se têm apenas uma sentença(uma linha) e o retorno é implicito

console.log(dobro3(Math.PI))

let ola = function(){
    return'Ola!'
}

console.log(ola())

let ola2 = () => 'Olá!'

console.log(ola())





