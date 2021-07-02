//"this" e a Função bind
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
    console.log(this.saudacao)//Acessando o atributo de um objeto usando this(sem o this não funciona)
    }
}

pessoa.falar()
const falar = pessoa.falar//a função fala esta sendo chamada apartir do contexto da constante, não do objeto pessoa
falar()//Conflito entre paradigmas: funcional e OO


const falarDePessoa = pessoa.falar.bind(pessoa)//O bind vc passa um objeto no qual vc quer que seja resolvido o this
falarDePessoa()//O bind Método responsável por amarrar um determinado objeto para ele ser o dono da execução naquele método

