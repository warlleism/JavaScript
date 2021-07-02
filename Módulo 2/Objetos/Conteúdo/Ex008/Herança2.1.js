// Object.Create //

const pai1 = {nome: 'Warllei', corCabelo: 'preto'}

//Criando um obj filho apartir do object.create passando o pai como parâmetro
//Assim é criado um novo objeto tendo como protótipo o objeto pai o "pai1"

const filha1 = Object.create(pai1)

filha1.nome = 'Luiza';
filha1.corCabelo = 'Branco';

console.log(filha1)
console.log(filha1.corCabelo)
console.log(filha1.nome)

const filha2 = Object.create(pai1, {
    nome: {value: 'Bia', writable:false, enumerable: false},
    idade: {value: 18, writable:false, enumerable: true}
})

//writable - pode ou não ser modificado( funciona igual o frozem)
// enumerable - permite ou não ser listado no momento que for usado um object.keys,foreach e etc

console.log(filha2.nome)
filha2.nome = 'Clara'//não ira mudar
console.log(`${filha2.nome} tem cabelo de cor ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))//Não aparece tudo por causa  do enumerable setado como falso

for(let key in filha2){
    console.log(key)
}

for(let key in filha2){
    filha2.hasOwnProperty(key)?
    console.log(key) : console.log(`Por herança ${key}`)
}
//Verificando se uma propriedade pertence ou não ao objeto
//hasOwnProperty - Retornando os atributos passados como herança
//Se o hasOwnProperty retorna true ele mostra os objetos pertencentes ao objeto filho, se retorna false ele mostra os pertencentes ao protótipo

