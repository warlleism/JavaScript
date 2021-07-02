function newBotton(text, callback) {
    const corpo = document.querySelector("body")
    const button = document.createElement("button")
    button.textContent = text

    callback(button) //No momento que o callback é executado ele recebe o button

    corpo.appendChild(button)

}

newBotton('Login', (botao) => {
    botao.style.cssText = `
    font-size: 20px;
    background-color: green;
    `;
    botao.addEventListener('click', () => {
        console.log('Oi');
    })
})


newBotton('Senha', (botao) => {
    botao.style.cssText = `
    font-size: 20px;
    background-color: green;
    `;
    botao.addEventListener('click', () => {
        console.log('Oi');
    })
})