const venderFruta = (fruta) => {
    switch (fruta) {
        case 'maçã':
            console.log(`Não vendemos maçã fruta aqui`)
            break
        case 'kiwi':
            console.log("Estamos com escassez de kiwi")
            break
        case 'melancia':
            console.log("Aqui está, são 3 reais o quilo da melancia")
            break
        default:
            console.log("Fruta Não Encontrada.")
    }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')