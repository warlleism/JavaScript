function carro(velocidadeMaxima = 200, delta = 5){
    //Atributo privado (pertence ao escopo dessa função)
    let velocidadeAtual = 0

    //método público

    this.acelerar = function (){//O this deixa visivel para fora da função
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        } 
    }

    //método público

    this.getvelocidadeAtual = function(){
        return velocidadeAtual  
    }

    //metodo privada
    //const = getvelocidadeAtual = function(){
    //   return velocidadeAtual  
   // }
}

const uno = new carro()//objeto instânciado
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrare = new carro(350, 20)//objeto instânciado
ferrare.acelerar()
console.log(ferrare.getvelocidadeAtual())
