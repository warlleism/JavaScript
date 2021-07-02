// Object.assign

const a = {
    name1: 'Warllei'
}

const b = {
    name2:  'Rafael'//Name 2 sera á sobreescrito pela const c
}

const c = {
    name2: 'Geusa'
}

const d = Object.assign(a,b,c) //Junta/concatena 1 ou mais objetos  em um objeto de destino
console.log(d)

// Object.freeze

Object.freeze(d)// A const b não pode ser mais alterado



