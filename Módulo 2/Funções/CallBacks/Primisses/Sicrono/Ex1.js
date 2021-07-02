function sumNumber(){
    let result = 1 + 1

    if(result == 2){
        sucessoCallback()
    }else{
        erroCallback()
    }
}

function sucessoCallback(){
    console.log('Yeah! Number 2')
}

function erroCallback(){
    console.log('Opps! something wrong')
}

sumNumber()