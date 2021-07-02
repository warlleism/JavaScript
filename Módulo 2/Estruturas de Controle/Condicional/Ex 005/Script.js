

var agora = new Date();
var hora = agora.getHours()


document.write(`Agora são Exatamente ${hora}hrs <br>`)

if(hora < 12){
    window.document.write("Bom Dia!");
    window.document.body.style.backgroundColor = 'blue'
} else if(hora <= 18){
    window.document.write("Boa Tarde");
    window.document.body.style.backgroundColor = 'orange'
}else if(hora <= 24){
    window.document.write("Boa Noite");
    window.document.body.style.backgroundColor = 'black'
}