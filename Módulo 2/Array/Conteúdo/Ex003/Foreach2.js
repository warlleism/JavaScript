const Aprovados = ['Agatha', 'Aldo', 'Daniel', 'Reaquel']

function forEach() {
    for (valores in Aprovados) {
        console.log(`${valores}) ${Aprovados[valores]}`)
    }
}

forEach(Aprovados);

console.log('//////////////////////////////')



Array.prototype.forEach2 = (function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
})
   
Aprovados.forEach2(function (name, indice, array) {
    console.log(`${indice + 1}) ${name}`)
    console.log(array)
})
