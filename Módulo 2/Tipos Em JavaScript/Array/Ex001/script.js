const valores = [nome = 'warllei', idade = 25, cidade = 'Vila Velha']

valores[3] = sobrenome = 'Martins'
console.log(valores[0], valores[3])

console.log(valores.length) // Quantidade de elementos dentro tem um array

valores.push({ id: 3 }, false, null, nome2 = 'teste')

console.log(valores)

console.log(valores.pop()) // Retorna  e apaga o ultimo valor dentro do array

console.log(valores)