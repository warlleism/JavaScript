
// Getter //

// Get = Pega/retornar 

// Get - Usado para definir os métodos, obter o valor de uma propriedade

// Propriedade Acessora GET

//Exemplo GET - Usado para acessar as propriedades de um objeto

const estudante = {

    _name: 'Warllei',//atributo privado

    //ascessando propriedade com getter

    get getName() {
        return this._name
    },

   
};

console.log(estudante._name)
console.log(estudante.getName)// acessando o get que tem uma função dentro dele
// console.log(estudante.getName())//Vai dar erro pois esta tentando acessa a função


