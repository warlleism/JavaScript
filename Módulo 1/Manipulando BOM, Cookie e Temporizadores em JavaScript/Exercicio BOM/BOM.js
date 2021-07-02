
//chamando objetos/funçoes/métodos

console.log(window.screen.width);//Vendo método largura da página através do objeto windows 
console.log(window.screen.height);//Vendo método altura da página através do objeto windows 
console.log(window.screen.orientation);// screen.orientation Objeto com métodos angle,onchange,type
console.log(window);//Vendo os métodos e bojetos dentro do windows
console.log(window.navigator);//Informações de navegador
console.log(window.navigator.appCodeName);//Nome do navegador
console.log(window.navigator.appVersion);//Versão do navegador
console.log(window.navigator.language);//Linguagem
console.log(window.location);//Informações de URL
// location.href = "http://www.google.com" //Redirecionando a página

console.log(window.history);//Relacionado a redirecionamento de página onde são guardadas as informações 
                            //de páginas acessadas antes e depois
function voltar(){
    history.back()
}

function adiantar(){
    history.forward()
}
