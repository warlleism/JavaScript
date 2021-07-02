const cores = ['Azul','Vermelho','Rosa'];

for(let indice  in cores){
    console.log(`Mostrando apenas os indices =${indice}`)
    console.log(`Mostrando indices(chaves) e valores =${indice,cores[indice]}`)
    console.log("////////////////////////////////")
}

console.log("////////////////////////////////")

for(let i = 0; i < 5;i++){
    console.log(`${cores[i]}`)
}