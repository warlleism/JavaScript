let comparaComThis = function(param){
    return param === this//Aqui o comparaComThis aponta para o escopo global
}

console.log(comparaComThis(global))

const obj = {}
comparaComThis = comparaComThis.bind(obj)//Agora o comparaComThis aponta para o obj
console.log(comparaComThis(global))
console.log(comparaComThis(obj))

let comparaComThisArrow = param => console.log(this === param)//Aqui o this aponta para o modulo/arquivo do node onde a função foi definida(não global)

comparaComThisArrow(global)

// Arrow functions são mais fortes que o bind

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
