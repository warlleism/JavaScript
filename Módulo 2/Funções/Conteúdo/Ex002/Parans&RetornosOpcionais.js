function area(largura,altura){
    const area = largura * altura
    if(area > 20){
        console.log('Valor acima do permitido' + area + 'm2')//retornando nada
    }else{
        return area//Retornando o valor em area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area(2,2,4))
console.log(area(5,5))