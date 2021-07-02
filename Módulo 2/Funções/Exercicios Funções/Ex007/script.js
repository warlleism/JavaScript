function bhaskara(a, b, c) {
    let array = [];
    let delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        return `Delta = ${delta}. 'Delta é negativo! não existem raízes de números negativos'`
    }

    let x1 = (-b + Math.sqrt(delta)) / 2 * a;
    let x2 = (-b - Math.sqrt(delta)) / 2 * a;
    array.push(x1)
    array.push(x2)
    return array
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))