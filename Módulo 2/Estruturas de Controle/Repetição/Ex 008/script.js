const pessoas = {
    nome:'warllei',
    idade:25,
    sexo:'Masculino',
    nacionalidade:'Brasileiro'
}

for(caracteristicas in pessoas){
    console.log(`${caracteristicas} = ${pessoas[caracteristicas]}`)
}