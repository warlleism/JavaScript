//This dentro do escopo global

function compara(param) {
    return this === param
}


console.log(compara(global))


//Arrow functions amarram o this dentro do contexto da função

const compararComThis = (param) => {
    return this === param
}

console.log(compararComThis(global))




function pessoa(nome) {

    this.nome = nome

    this.addNome = function (param) {
        console.log(`Meu nome é ${this.nome}`)
        return console.log(this.nome === param)
    }

}


const CratePeople2 = new pessoa('Warllei')
CratePeople2.addNome(global)


//Amarrando o this dentro do contexto da função ARROW

const Pessoas = (nome, nome2) => {

    this.nome = nome//Esse this está dentro do contexto da função addNomes
    this.nome2 = nome2//Esse this está dentro do contexto da função addNomes

    console.log(`Meu nome é ${nome}`)

    addNomes = function (nomes) {
        this.nome = nomes //Esse this está dentro do contexto da função addNomes
        return `Meu nome é ${nomes}`
    }
    console.log(addNomes(nome2))

}

Pessoas('Warllei','Rafael')