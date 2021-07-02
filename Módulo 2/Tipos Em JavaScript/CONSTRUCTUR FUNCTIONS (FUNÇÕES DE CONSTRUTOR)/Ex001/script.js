function Celular(marca,tamanho,capacidade){
    this.marca = marca,// This é um referêncial do objeto atual
    this.tamanho = tamanho,
    this.capacidade = capacidade
}

const celular = new Celular('LG','15cm','100%') // Instanciando um objeto

console.log(celular)
