//Usado em multiplas para seleções
const imprimirResultado = function (nota){
    switch(Math.floor(nota)){//A expressão do switch não retorna verdadeiro ou falso/lógica
        case 10:        
        case 9:
            return 'Ótima nota'
            break
        case 8:
        case 7:
            return 'Boa nota'
            break
        case 6:
        case 5:
            return 'Na média'
            break
        case 4:
        case 3:
            return 'Recuperação'
            break
        case 2:
        case 1:
            return 'Reprovado'
            break
    }
}

console.log(imprimirResultado(1))