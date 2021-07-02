function Comparar(num1, num2) {
    return num1 > num2
}

console.log(Comparar(2.5, 1))



function maiorOuIgual(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) {
        return false
    } else {
        return primeiro >= segundo
    }

}

console.log(maiorOuIgual(2.5, 1))





