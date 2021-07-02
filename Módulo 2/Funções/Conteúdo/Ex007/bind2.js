/*
function Pessoa(){
    this.idade = 0

    //Como é um temporizador que está chamando é a função setInterval e não o próprio obj pessoa, o this.idade não aponta para o objeto pessoa.

    setInterval(function(){//Essa função dispara outra função apartir de um determinado intervalo passado
        this.idade++
        console.log(this.idade)
    },1000)//intervalo(temporizador(//A cada 1000 = 1 segundo miles segundos essa função vai ser disparada/invocada novamente
}//O temporizador é quem vai invocar a função, então não é necessário chamal-a

new Pessoa//invocando a função através da criação de um novo objeto para ver se o this sera referênciado
*/

//Resolvendo

/*
function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //Amarrando o this do objeto a chamada dessa função
}

new Pessoa
*/

// Ou

function Pessoa() {
    this.idade = 0

    const self = this//Como o this varia, ele é guardado dentro de uma constante para se manter sempre o mesmo
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    },1000) //Amarrando o this do objeto a chamada dessa função
}

Pessoa()
