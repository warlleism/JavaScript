const funcs = []

for(let e = 0; e < 10; e++){
    funcs.push(()=>{
        console.log(e)
    })
}

funcs[1]()//Let tem escopo de função/bloco// A cada repetição o espaço do let será respeitado
funcs[2]()