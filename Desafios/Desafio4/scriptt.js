function verificar() {
    let num = document.getElementById('valor')
    let res = document.getElementById('resultado')

    let valor = Number(num.value)
    let c = 1

    if (num.value.length == 0) {
        window.alert("[ERRO] Dados inválidos")
    } else {
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${valor} * ${c} = ${ valor * c}`
            res.appendChild(item)
            c++
        }
    }
}