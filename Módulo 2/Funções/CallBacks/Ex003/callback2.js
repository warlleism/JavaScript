//Funções callback que irão modificar um botão antes dele ser adicionado a tela

function newButton(param, callback) {//callback é uma função

    const corpo = document.querySelector("body");

    const button = document.createElement("button");

    button.textContent = param;//adicionando conteúdo de texto ao elemento criado

    callback(button);//função recebe o botão dentro dele//assim vc pode pega-lo e jogar para fora //Esse callback é executado antes de inserir os botões na tela

    corpo.appendChild(button)

    return button//Jogando botão para fora
}

newButton('Loguin', (button)=>{//pegando o button dentro da função callback 
    button.style.cssText = `
    font-size: 20px;
    background-color: green;
    `;
        
    button.addEventListener('click', ()=>{
        console.log('Oi');
    })
})

newButton('Signup', (button)=>{
    button.style.cssText = `
    font-size: 20px;
    background-color: blue;
    `;
    
    button.addEventListener('click', ()=>{
        console.log('Xau');
    })
})
