const getData = async () => {//chamando a função getData assicrona
    const url = window.document.querySelector('#inp')
    var code = window.document.querySelector('#results')
    var select = window.document.querySelector('#method')
    var method = select.value

    if (url.value) {//Se existe url
        code.innerHTML = await fetch(url.value, { method: method })
            .then(res => res.text())
            .catch(erro => erro)

    } else {
        code.innerHTML = 'Please, enter a url for request data'
    }
}