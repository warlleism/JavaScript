function verificar() {

    let data = new Date();
    let ano = data.getFullYear();

    let nasc = document.getElementById('idade');
    let sexo = document.getElementsByName('sexo');
    let resultado = document.getElementById('resultado');

    let nasc1 = Number(nasc.value)

    let idade = ano - nasc1

    let genero = ' '

    let img = document.createElement('img');
    img.setAttribute('id', 'foto')

    if (nasc.value.length == 0 || Number(nasc.value) > ano) {
        window.alert("[Erro] Valor Inválido!")
    } else {
        if (sexo[0].checked) {
            genero = 'Masculino'
            resultado.innerHTML = `Você é do gênero ${genero} e tem ${idade} anos`
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', 'img/homem/crianca.jpg')

            } else if (idade < 20) {
                img.setAttribute('src', 'img/homem/jovem.jpg')

            } else if (idade < 40) {
                img.setAttribute('src', 'img/homem/Adulto.jpg')

            }
        } else if (sexo[1].checked) {
            genero = 'Feminino'
            resultado.innerHTML = `Você tem ${idade} anos e tem o genêro ${genero}`
            if (idade > 0 && idade < 10) {
                img.setAttribute('src', 'img/mulher/crianca.jpg')
            } else if (idade < 20) {
                img.setAttribute('src', 'img/mulher/jovem.jpg')
            } else if (idade < 40) {
                img.setAttribute('src', 'img/mulher/adulta.jpg')
            }
        }
        resultado.appendChild(img)
    }
}