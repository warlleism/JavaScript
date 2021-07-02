let amigo = {
    nome: 'Rafael',
    idade: 24,
    peso: 80,

    engordar(p = 0) { //Zero para valor inicial
        console.log("Engordou!")
        this.peso += p //Pegando o atributo peso  e adicionando valor a ele
    }
}
console.log(amigo)
console.log(amigo.nome)
amigo.engordar(2)
console.log(`${amigo.nome} Pesa ${amigo.peso} kg`)