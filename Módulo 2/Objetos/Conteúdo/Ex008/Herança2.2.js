// Função e atributo prototype da função//
//Uma vez que seja criado 1 ou mais objetos diferentes apartir de uma mesma função construtora, os prototipos desses objetos apontam para o mesmo objeto (prototipo)? SIM!
//Quando vc cria um objeto apartir de uma função construtora, o protótipo desse objeto automaticamente aponta para a função criada.
//Quando vc cria um objeto apartir do new object , ou apartir do objeto literal por padrão ele aponta para o object.prototype


function MeuObjeto() {
    console.log(MeuObjeto.prototype)
}

const obj1 = new MeuObjeto()//Criando instancias da função MeuObjeto//Criando 2 objetos apartir de uma função construtora
const obj2 = new MeuObjeto()
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)


//Qualquer obj criado apartir dessa função tera esse atributo//Passando atributos para o prototipo da função
MeuObjeto.prototype.name = 'anônimo';
MeuObjeto.prototype.falar = function () {
    console.log(`Olá Mundo ${this.name}` )
}

obj1.falar()

obj2.name = 'Rafael';
obj2.falar()


//Atribuindo o prototipo da função manualmente//criando relacionamento entre objeto e função(prototipo da função)
//Mudando a referência do prototipo do obj3, saindo de object.prototype para MeuObjeto.prototype
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype

obj3.name = 'Geusa',
obj3.falar()
 




