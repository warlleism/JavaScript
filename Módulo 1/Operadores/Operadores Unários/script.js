let num1 = 1
let num2 = 2

num1++

console.log(num1)

--num1

console.log(num1)

console.log(++num1 === num2--)// o pré-fixada(++num1) foi executado antes do num2-- póis o -- está pós-fixada
console.log(num1 === num2)