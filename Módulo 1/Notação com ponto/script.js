//Notação ponto é usada para acessar membros de objetos e funções

function obj(nome){
    this.nome = nome//This serve para atribuir ao this o parâmetro dentro da função//uma variável não deixaria o nome visivel,ficaria guardada dentro da função devido ao escopo                 
                    //Assim deixando o nome visivel para quem instânciar o objeto do tipo obj            
    this.exec =function exec(){
        console.log('Exec....')
    }
}

const obj2 = new obj('warllei')
const obj3 = new obj('Rafael')
const obj4 = new obj('Geusa')

console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj4.nome)
obj3.exec()
