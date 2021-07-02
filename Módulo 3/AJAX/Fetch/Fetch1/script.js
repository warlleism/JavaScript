fetch('https://reqres.in/api/users/2')
    .then(response => {//idepedente do nome do parâmetro passado ele sera basicamente o response/resposta
        console.log(response)//O response está diretamente vinculado ao método fetch/requisição 
        return response.json()//Os dados json presente na api(ex) só aparecerão se forém convertidos para json
    }).then(function (response) {//chamando novamente o response
        document.querySelector('.app').innerHTML = response.data.first_name//Puxando elemento do servidor
        console.log(response)//Chamando o response após ser convertido para json
    })
