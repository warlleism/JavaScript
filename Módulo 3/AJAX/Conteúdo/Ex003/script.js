let nome = document.getElementById('nome')
let job = document.getElementById('job')
let form = document.getElementById('form')

form.addEventListener("submit" , function(event) {
    event.preventDefault();//Ao clicar no cadastrar a página não será carregada
    
    let dados = { //Pegar as informações que estarão digitadas nos campos
        nome: nome.value,
        job: job.value
    }
//Até aqui já tenh o acesso aos dados digitados

    fetch('https://reqres.in/api/users', { //Enviando informações para o servidor
        method: 'POST',//Get para pegar as informações
        body: JSON.stringify(dados)//corpo da requisição/convertento a transição do dado do front para o back-end em string
    })

    .then(function(response){//Pegar informações do response/Ex: status
        console.log(response.json())
    })
    .then(() => {//informando ao usuário se deu certo ou não
        alert("Ok Cadastro com sucesso");
    })
})