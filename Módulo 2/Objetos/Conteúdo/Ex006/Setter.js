// Getter and Setter //

// Setter //

// Setter - São usados para alterar os valores de objetos.

// Set - Define o método para poder definir o valor de uma determinada propriedade.

const estudante = {

    _name: 'Warllei',//atributo privado

    //setter//

    set mudarName(novoNome){
        this._name = novoNome;
    }
}

console.log(estudante._name);

//Mudando o nome usando set

estudante.mudarName = 'Rafael'//Não estou indo direto no atributo nome dentro do obj, e sim, acessando o método no set para muda-lo

console.log(estudante._name);