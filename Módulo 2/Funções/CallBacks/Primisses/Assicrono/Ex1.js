let p = new Promise( (resolve , reject) =>{
    let a = 1 + 1
    if(a == 2){
        resolve(' Sucess')
    }else{
        reject(' Failed')
    }
})

//Chamando a função
//Then para o resolve ser chamado
//catch para o reject ser chamado

p.then((message) =>{
    console.log('This is in the then' + message)
}).catch((err) =>{
    console.log('This is the catch' + err)
})