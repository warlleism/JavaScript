// Procedural

//Esses valores serão acessados por essas funções

//Função que manipula dados

Processamento(valor1,valor2,valor3)


// OO

//Dados que dentro deles tem funções

//Os objetos são gerados, dentro deles tem valores,atributos internos,comportamentos

objeto = {
    valor1,//atributos
    valor2,
    valor3,
    processamento(){//comportamentos
        //...
    }
}

objeto.processamento()//Se invoca processamentos apartir do dado(objeto)

//Principios importantes:
//1. Abstração = Pegar um objeto do mundo real a traduzir para dentro do sistema
//2. Encapsulamento = Ter detalhes de implementação escondidos e mostrar para quem precisa usar.
//3. Herança - Serve para reuso de código. Você recebe atributos e comportamentos de um objeto pai. JS não permite herança multipla(heraça de diversos).
//4. Polimorfismo = Multiplas formas