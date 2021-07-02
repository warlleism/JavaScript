function verificar() {
    let ini = document.getElementById('inicio')
    let fm = document.getElementById('fim')
    let pass = document.getElementById('passo')
    let res = document.getElementById('resultado')

    let inicio = Number(ini.value)
    let fim = Number(fm.value)
    let passo = Number(pass.value)

    if (ini.value.length == 0 || fm.value.length == 0 || pass.value.length == 0) {
        window.alert("[ERRO] Dados inválidos")
    } else {
        res.innerHTML = 'Contando:'
        for (let i = inicio; i <= fim; i += passo) {
            res.innerHTML += ` ${i}`
        }
    }
}