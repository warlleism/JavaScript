
//Objeto pai

const carro = {
    modelo: ' ',
    velAtual: 0,

    Radar(velocidade){
        if(velocidade >= 60){
            this.velAtual += velocidade
            return `Velocidade ${this.velAtual}Km/h. Multado`;
        }else{
            return `Velocidade ${this.velAtual}Km/. Dentro do limite de velocidade`
        }
    },

    Informacoes(){
        return` Modelo: ${this.modelo} / ${this.velAtual}Km/h / Placa: ${this.placa} `
    }
}


const ferrari = {
    modelo: 'Ferrari F40',
    placa: 1312343,
    velAtual: 50
}


const volvo = {
    modelo: 'Volvo V40',
    placa: 5123456,
    velAtual: 70
}



Object.setPrototypeOf(ferrari, carro)

Object.setPrototypeOf(volvo, carro)

console.log(ferrari.Radar(100), ferrari.Informacoes())


console.log(volvo.Radar(100), volvo.Informacoes())




