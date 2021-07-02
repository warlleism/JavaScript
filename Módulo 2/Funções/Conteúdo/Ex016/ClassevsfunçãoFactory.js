//Classe

class Pessoa {

    constructor(nome) {
        this.nome = nome //Vriável pública por causa do this
    }

    falar() { //De acordo com a chamada dessa função(onde está chamando) o this pode variar
        console.log(`Meu nome é ${this.nome}`)
    }
}

const people = new Pessoa('Warllei')
people.falar()

//Função

const pessoa = function (nome) { //contexto léxico //Como a função factory não usou o this, não corre o risco do nome variar
    return {
        falar: () => { //método
            console.log(`Meu nome é ${nome}`)
        }
    }
}

const p2 = pessoa('Warllei')
p2.falar()