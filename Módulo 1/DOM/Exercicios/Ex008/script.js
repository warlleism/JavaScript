var p = document.createElement("p");
//p.textContent = 'Warllei Martins';  Criando um texto

var texto = document.createTextNode("Warllei Da Silva Martins");

function iniciar() {
    p.appendChild(texto); //appendChild = recebe
    document.body.appendChild(p)
}

window.addEventListener("load", iniciar)