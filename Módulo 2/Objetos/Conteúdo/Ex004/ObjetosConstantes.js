//Objetos Constantes
//Porque mesmo sendo declarado dentro de constantes os objetos podem ser alterados?

// Pessoa tem dentro de si o endereço de memória 
// (constante)Pessoa -> (Endereço)123 -> (objeto criado){...}

const pessoa = {nome: 'Warllei'}

pessoa.nome = 'Pedro'//A constante não é mudada, e sim o objeto criado que pode ser alterado
//A constante pessoa é quem não pode ser alterada

console.log(pessoa.nome)

//ERRO//
// (Constante) Pessoa <-{...} novo objeto <- 456 endereço diferente

/* pessoa = {nome: 'Ana'} */ //Pessoa esta recebeno um novo objeto que  esta em um endereço diferente

//Como constante ela sempre apontara para o objeto que está no mesmo endereço


//Deixando o objeto criado Constante

Object.freeze(pessoa) // Metodo para congelar o objeto// Uma vez que o objeto esta congelado, você não consegue mais mexer no objeto

pessoa.nome = 'Rafael'//Ignorado
pessoa.endereo = "Avenida são pedro"//Ignorado
delete pessoa.nome//Ignorado

console.log(pessoa.nome)
console.log(pessoa)


//Criando Objeto Constante

const PessoaConstante = Object.freeze({nome: 'Warllei',idade: 25})

console.log(PessoaConstante)