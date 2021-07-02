//Função Construtora

function Pessoa(nome) {
    this.nome = nome
    this.addNome = () => { //This. Para Transformar essa função, e para ficar diretamente na instância criada
        console.log(`Seu nome é ${this.nome}`)// É usado o this no nome para que se possa ter acesso a ele mudalo quando quiser ao instânciar o objeto
    }

    addNome()

}


Pessoa('Warllei') // chamando função interna dentro da própria função

//Ou


function Pessoas(nomes) {
    this.nomes = nomes

    this.darNome = () => {
        return `Seu nome é ${this.nomes}`
    }
}

const CriarPessoas = new Pessoas('Warllei Martins')// É usado o this no nome para que se possa ter acesso a ele mudalo quando quiser ao instânciar o objeto(fora da função)
console.log(CriarPessoas.darNome())

