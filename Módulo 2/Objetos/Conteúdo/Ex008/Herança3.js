 //Toda função tem o atributo prototype


 String.prototype.reverse = function () {
     return this.split('').reverse().join('')
 }

 console.log('Escola Cod3r'.reverse())

 //Você acessa o array ou string dentro de um método prototipo usando o this.

 Array.prototype.first = function () {
     return this[0]
 }

 console.log([1,2,3,4].first())
 console.log(['x','v','w'].first())