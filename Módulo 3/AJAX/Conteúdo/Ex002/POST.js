var xhr = new XMLHttpRequest();

var documento = {
    "userId": 200,
    "id": 12,
    "title": "Noticia Exclusiva",
    "body": "Desenvolvedor larga Jquery"
}

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        console.log(xhr);
    }
}

xhr.open("POST", "https://jsonplaceholder.typicode.com/");
xhr.send(documento);



