function planoDeSaude(idade) {
    let valorASerPago = 100

    if (idade < 10) {
        valorASerPago += 80;
    }else if(idade <= 30){
        valorASerPago += 50;
    }else if(idade <=60 ){
        valorASerPago += 95
    }else{
        valorASerPago += 130
    }

    return valorASerPago
}

console.log(planoDeSaude(61))

