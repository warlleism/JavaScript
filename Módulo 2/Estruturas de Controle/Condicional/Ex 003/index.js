function calcular(){

    var vel =  window.document.getElementById('numero')
    var velocidade  =  Number(vel.value)

    if( velocidade > 60){
        window.document.getElementById('verificar').innerHTML = `Sua Velocidade atual é de<strong> ${velocidade }km/h </strong>. <br>Você foi multado`
    }
    else{
        window.document.getElementById('verificar').innerHTML =`Sua Velocidade atual é de ${velocidade }km/h. <br>Dirija com segurança`
    }
}