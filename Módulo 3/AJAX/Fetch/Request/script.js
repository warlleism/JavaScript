const getData = async() => {//chamando a função getData assicrona
    const url = window.document.querySelector('#inp') 
    var code = window.document.querySelector('#results')
    var select = window.document.querySelector('#method')
    var method = select.value

    if(url.value){//Se existe url
        function reqListener(){
            var data = JSON.parse(this.responseText)
            code.innerHTML = JSON.stringify(data)//transfomando em string para aparecer no console.log
        }

        var req = new XMLHttpRequest()
        req.onload = reqListener
        req.open(method,url.value, true)
        req.send()
    }else{
        code.innerHTML = 'Please, enter a url for request data'
    }
}