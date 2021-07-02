const tiposTriangulos = (lado1,lado2,lado3) => {
    if(lado1 === lado2 && lado2 === lado3){
        return 'Equilátero';
    }else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
        return 'Isósceles'
    }else if(lado1 != lado2 != lado3){
        return 'Escaleno'
    }
}

const result1 = tiposTriangulos(1,1,1)
const result2 = tiposTriangulos(1,1,3)
const result3 = tiposTriangulos(1,4,3)
console.log(result1)
console.log(result2)
console.log(result3)