function Endereco(rua, cidade, cep) {
    this.rua = rua
    this.cidade = cidade
    this.cep = cep
}

function saoIguais(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua &&
        endereco1.cep === endereco2.cep &&
        endereco1.cidade === endereco2.cidade
}

function LocalEmMemoriaDosObjetos(endereco1, endereco2){
    return endereco1 === endereco2
}

const Endereco1 = new Endereco('São Pedro', 'Vila Velha', 123123231)
const Endereco2 = new Endereco('São Pedro', 'Vila Velha', 123123231)

console.log(saoIguais(Endereco1, Endereco2))
console.log(LocalEmMemoriaDosObjetos(Endereco1,Endereco2))