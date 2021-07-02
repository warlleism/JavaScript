
//Objeto pai

const carro = {
    modelo: ' ',
    velAtual: 0,
    velMax: 200,//Sera sobreescrito para a velMax nos objetos

    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },

    status(){
        return`${this.modelo} : ${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

//Objeto filho

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing - acontece quando o valor em um objeto sobreescreve o valor definido no prototipo
}

//Objeto filho
const volvo = {
    modelo: 'V40',
    velMax: 200,
}


//Função que estabelece uma relação de prototipo entre DOIS objetos
//Equivalente ao __proto__

Object.setPrototypeOf(ferrari, carro)//Estabelecendo uma relação entre o obj ferrari e o obj carro
Object.setPrototypeOf(volvo, carro)

ferrari.acelerarMais(100)
console.log(ferrari.status())

volvo.acelerarMais(100)
console.log(volvo.status())

