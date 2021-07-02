function aula (nome , video) {
    this.nome = nome;
    this.video = video;
}

const aula1 = new aula('Bem vindo', 123)
const aula2 = new aula('Até Breve', 461)

console.log(aula1, aula2)

// O operador New - Cria um novo objeto e aponta o prototipo desse objeto para o prototipo da função


//Simulando o NEW

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(aula, 'Bem vindo', 123)
console.log(aula3)