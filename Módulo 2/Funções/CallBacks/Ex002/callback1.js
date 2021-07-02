const button = document.querySelector('button')

button.addEventListener('click', ()=>{//Está Errow function é uma função de callback
    window.alert('Botão clicado')//Função sendo chamada após ocorrer o evento do click
})

//OU

const HandleClick = () => {
    console.log('Você Clicou!')
};

button.addEventListener("click", HandleClick)