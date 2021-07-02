let endereco = {
    rua: ': Avenia São Pedro',
    cidade: ': Vila Velha',
    CEP: ': 288790480'
}

function exibirEndereço(endereco) {
    for (identificador in endereco) {
        console.log(identificador, endereco[identificador])
    }
}
exibirEndereço(endereco)