// --------------- Getters/Setters --------------
//O getter é responsável por pegar o valor e retorna-lo
//O Set sempre será executado antes.
const sequencia = {
    _valor: 1, // underline - convenção para dizer que é uma variável(atributo) privada

    get valor() { return this._valor++ },//Consegue apenas  leitura e atribuir valor.

    set valor(valor) {// Usado para atribuir um valor ao atributo do objeto privado.// Método set - atribuindo valor a um atributo privado
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
