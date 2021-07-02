const x = 'Global'

function fora() {
    const x = 'Local'

    function dentro() { //Função criada dentro do contexto da função "fora()"
        return x
    }
    return dentro
}

const minhafunc = fora()
console.log(minhafunc())