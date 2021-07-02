var xhr = new XMLHttpRequest();
var documento;

xhr.responseType = "json" //Especifica que tipo de documento você quer que ele devolva por padrão//Transformando o documento em um objeto json

xhr.onreadystatechange = function () {

    if (xhr.readyState == 4 && xhr.status == 200) { //readyState 4 = Solicitação concluída e resposta pronta
        documento = xhr.response;
        //documento = JSON.parse(documento); //Transformando o documento em um objeto json
        console.log(documento);
    }else{

    }
};


xhr.open("GET", "https://jsonplaceholder.typicode.com/", true);//(tipo de abertura) Permite enviar um método http uma url e se vai ser síncrono ou assíncrono
xhr.send();//Mandar a requisição para o servidor (Enviando Toda essa configuração feita para o objeto e concretizada para o servidor)

//GET = Listar informações de uma postagem feita pelo usuário
//URL = Que está sendo solicitada
//True/False = Se é ou não assíncrono
