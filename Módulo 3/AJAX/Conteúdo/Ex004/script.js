let email = window.document.getElementById('email')
let tel = window.document.getElementById('numero')
let desc = window.document.getElementById('descricao')
let form = window.document.getElementById('form')

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let dados = {
        email: email.value,
        telefone: tel.value,
        descricao: desc.value
    };
    console.log(dados)

    fetch('https://reqres.in/api/users', {
        method: "POST",
        body: JSON.stringify(dados)
    })
        .then((response) => {//objeto que contem informações que o fetch tem sobre a requisição
            return response.json()//retorna um objeto com as informações
        })
        .then((response) => {
            alert("Cadastro Completo")
            console.log(response)
        })
})