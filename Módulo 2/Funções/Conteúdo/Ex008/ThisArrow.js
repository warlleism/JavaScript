//This dentro de uma função Arrow ele é fixo, baseado no contexto no qual a função foi escrita
//Usando arrow o this fica dentro do contexto léxico(contexto da palavra/local fisico onde está)

function pessoa() {
    this.idade = 0

    const self = this
    setInterval(() => {
        self.idade++
        console.log(self.idade)
    },1000)
}

pessoa()

//Ou

const pessoaa = () => {
    this.num = 0

    const self = this
    setInterval(() => {
        self.num++
        console.log(self.num)
    },1000)
}

pessoaa()