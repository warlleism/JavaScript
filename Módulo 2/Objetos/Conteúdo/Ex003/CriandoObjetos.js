//Criando objetos

//Notação Literal

const obj1 = {}


// função Object em js (instanciando função construtora)

const obj2 = new Object


// Funções construtoras

function produto(nome, preco, desconto) {
    this.nome = nome // Tornando a variável nome visível(publica)//Variável não encapsulada dentro do objeto
    //O nome pertence e instância por causa do this//quando o nome for passado ele estara visível nessa instância criada
    this.getPrecoComDesconto = () => {//Esse metodo também pertence a instância que for criada
        return preco * (1 - desconto)
    }
}

const p1 = new produto('Macarrão', 7.99,0.15)//Como o nome está visível, eu posso altera-lo
const p2 = new produto('feijão', 10.25,0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())
console.log(p1.preco)//Porém como preco e desconto não estão com o this(visivel fora da função) estão visiveis apenas dentro da propria função, não estão disponiveis externamente
console.log(p2.desconto)//Porém como preco e desconto não estão com o this(visivel fora da função) estão visiveis apenas dentro da propria função, não estão disponiveis externamente

  // Função Factory - função que fabrica alguma coisa

  function criarFuncionario(nome,salario,faltas){
      return {
          nome,
          salario,
          faltas,
          getSalario(){
              return (salario / 30) * (30 - faltas) + 'R$'
          }
      }
  }
const f1 = criarFuncionario('Warllei', 7980, 4)
const f2 = criarFuncionario('Rafael', 7980, 1)
console.log(f1.nome, f1.getSalario())
console.log(f2.nome, f2.getSalario())



//Objetc.create

const filha = Object.create(null)
filha.nome = 'Ana';
console.log(filha)



// Criando objeto com JSOM

const fromJSOM = JSON.parse('{"info": "Sou um objeto"}')
console.log(fromJSOM.info)




