// Coleção dinâmica de chaves/valores


const produto = new Object()
//Instanciando um objeto
//Criando um objeto apartir do construtor new
//Object() - é uma função 
//Função construtora = Quando se usa a função Object() com o new

produto.nome = 'Cadeira';
produto['preco'] = 25;
produto.marca = 'Generica';

delete produto.preco;//Deletando chave/valores
delete produto.nome;//Deletando chave/valores
delete produto['preco'];//Deletando chave/valores

console.log(produto)


const carro =
{
    modelo: 'A4',
    valor: 80000,
    proprietario: {
        nome: 'Warllei',
        idade: 56,
        endereço: {
            logradouro: 'Av. São Pedro',
            numero: 671,
            moradia: 'Casa'
        }
    },
    condutor : [{
        nome: 'Junor',
        idade: 28
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.carteira = 'AB'

console.log(carro.proprietario)
console.log(carro.proprietario.carteira)
console.log(carro.proprietario.endereço)

delete carro.condutor[0].nome

console.log(carro.condutor[0])
console.log(carro.condutor[1])
console.log(carro.condutor.length)
