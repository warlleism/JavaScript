function criarCookie(valorCookie){
   
    //Criar o objeto Date para setarmos o tempo de vida do cookie
    var data = new Date();

    //Tempo de vida para o cookie//60000  = 1 mnuto
    data.setTime(data.getTime() + 60000);

    //Criando o cookie/Chaves e valores
    document.cookie = "primeiroCookie= "+ valorCookie+ " ; expires= "+ data.toUTCString() + " ; path=/" ;

    return "Sucesso!";


}