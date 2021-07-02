class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {//forma de definir que uma determinada classe tem outra classo como protóripo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // Super - para instanciar a função construtora da classe Avo(chamando a função construtora da super classe )
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva','Programador')//instanciando função construtora das super classe
    }
}

const filho = new Filho()
console.log(filho)