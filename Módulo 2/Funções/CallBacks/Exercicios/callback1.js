const fabricantes = ["mercedes" , "audi", "BMW"]

const imprimir = (nome,indice) =>{
    console.log(`${indice + 1}. ${nome}`)
}


fabricantes.forEach(imprimir)//Para cada elemento encontrado dentro do array , ele vai chamar a função de volta para cada elemento encontrado

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})