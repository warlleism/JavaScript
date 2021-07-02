const anoBissexto = (ano) => {
    if (ano % 400 == 0) {
        return `${ano} É um ano Bissexto`;
    } else if (ano % 100 == 0) {
        return `${ano} Não é um ano Bissexto`;
    } else if (ano % 4 == 0) {
        return `${ano} É um ano Bissexto`;
    } else{
        return `${ano} Não é um ano Bissexto`;
    }
}

console.log(anoBissexto(2000))
console.log(anoBissexto(2010))
console.log(anoBissexto(2020))
