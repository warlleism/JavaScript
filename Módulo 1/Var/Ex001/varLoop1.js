for (var i = 0; i < 10; i++) {
}

console.log('i =',i)

///////////////////////////////////////

const funcs = []

for(var e = 0; e < 10; e++){
    funcs.push(()=>{
        console.log(e)
    })
}

funcs[2]()//Chamando/invocando a função dentro do índice 2
funcs[8]()//Como var não tem escopo de função