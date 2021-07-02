function verificar() {

    var data = new Date();
    var ano = data.getFullYear();

    var age = window.document.getElementById('idade')
    var sexo = window.document.getElementsByName('sexo');
    var result = window.document.getElementById('resultado')
    var img = window.document.getElementById('img')

    var idade = ano - Number(age.value)

    if (age.value.length == 0 || Number(age.value) > ano) {
        window.alert("[ERRO] Tente novamente!")
    } else {
        if (sexo[0].checked) {
            genero = "masculino"
            result.innerHTML = `Você é do sexo ${genero} e tem ${idade} anos.`
            if (idade >= 1 && idade <= 10) {
                img.src = "img/homem/crianca.jpg"
            } else if (idade <= 18) {
                img.src = "img/homem/Jovem.jpg"
            } else if (idade <= 45) {
                img.src = "img/homem/Adulto.jpg"
            } else if (idade <= 70) {
                img.src = "img/Velho.jpg"
            }
        } else if (sexo[1].checked) {
            genero = "feminino"
            result.innerHTML = `Você é do sexo ${genero} e tem ${idade} anos.`
            if (idade >= 1 && idade <= 10) {
                img.src = "img/Jovem.jpg"
            } else if (idade <= 18) {
                img.src = "img/Jovem.jpg"
            } else if (idade <= 45) {
                img.src = "img/Adulto.jpg"
            } else if (idade <= 70) {
                img.src = "img/Velho.jpg"
            }
        }
    }
}