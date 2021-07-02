function Carro(velocidade) {

    let velocidadeAtual = 0

    this.radar = () => {
        if (velocidade > 60) {
            velocidadeAtual += velocidade
            console.log(` Velocidade ${velocidadeAtual} Km/h. Multado!`)
        } else {
            velocidadeAtual += velocidade
            console.log(`Velocidade ${velocidadeAtual} Km/h. Dentro do limite de velocidade. Parabéns`)
        }
    }

    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const carro1 = new Carro(30)//objeto
carro1.radar()//função
console.log(carro1.getVelocidadeAtual())

const carro2 = new Carro(40)
carro2.radar()
console.log(carro2.getVelocidadeAtual())

const carro3 = new Carro(100)
carro3.radar()
console.log(carro3.getVelocidadeAtual())

const carro4 = new Carro(90)
carro4.radar()
console.log(carro4.getVelocidadeAtual())

