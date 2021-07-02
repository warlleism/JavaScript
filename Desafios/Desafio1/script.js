var hora = new Date();

var agora = hora.getHours();

var hr = window.document.getElementById('titulo')
var imagem = window.document.getElementById('imagem')
var horario = window.document.getElementById('titulo2')

if(agora < 5){
    hr.innerHTML  = 'Boa Madrugada!'
    imagem.src = "img/Noite.jpg"
    horario.innerHTML = `Agora são ${agora} Horas`
    window.document.body.style.backgroundColor = 'blue'
}else if(agora < 12){
    hr.innerHTML  = 'Bom Dia!'
    imagem.src = "img/Dia.jpg"
    horario.innerHTML = `Agora são ${agora} Horas`
    window.document.body.style.backgroundColor = 'yellow'
}else if(agora < 18){
    hr.innerHTML  = 'Boa Tarde!'
    imagem.src = "img/Tarde.jpg"
    horario.innerHTML = `Agora são ${agora} Horas`
    window.document.body.style.backgroundColor = 'orange'
}else if(agora < 24){
    hr.innerHTML  = 'Boa Noite!'
    imagem.src = "img/Noite.jpg"
    horario.innerHTML = `Agora são ${agora} Horas`
    window.document.body.style.backgroundColor = 'blue'
}
