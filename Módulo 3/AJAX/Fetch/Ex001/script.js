let nome = document.getElementById('nome')
let job = document.getElementById('job')
let form = document.getElementById('form')

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let dados = {
        nome: nome.value,
        job: job.value
    }

    //Fazendo um POST = Cadastrando usuário

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(dados)
    })
        .then(function (response) {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            alert("Ok Cadastro com sucesso");
        })

    //Fazendo GET = buscando as informações

    fetch('https://reqres.in/api/users')
        .then(function (response) {
            return response.json()
        })
        .then((response) => {
            console.log(response)
        })
    console.log(dados)
})



