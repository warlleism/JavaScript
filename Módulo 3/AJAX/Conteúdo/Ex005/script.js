fetch('https://reqres.in/api/users/2')
    .then((response) => {//fazendo requisição das informações do fetch
        return response.json();
    })
    .then((data) => {//fazendo requisição das informações dentro do objeto data
        console.log(data)
    })
    