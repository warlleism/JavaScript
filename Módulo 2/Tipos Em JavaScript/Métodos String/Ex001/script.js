//Métodos charAt e charCodeAt.

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.charAt(0); //Retorna O
var result2 = str.charCodeAt(0); //Retorna 79

//Métodos indexOf e lastIndexOf.

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var first = str.indexOf("Mundo"); //Retorna 4
var last = str.lastIndexOf("Mundo"); //Retorna 24

//Método slice.

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.slice(4, 13); //Retorna Mundo Olá

//Método substring.

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.substring(3, 9); //Retorna Mundo

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result2 = str.substring(3); //Retorna Mundo Olá Mundo Olá Mundo

//Método concat.

var a = "Olá";
var b = "Mundo";
var c = "do";
var d = "JavaScript";
var e = a.concat(" ", b, " ", c, " ", d, "!"); //Retorna Olá Mundo do JavaScript!

//Método replace.

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.replace("Mundo", "Bauru"); //Olá Bauru Olá Mundo Olá Mundo

//Método split. 
var str = 'Olá,mundo,do,JavaScript'
var arr = str.split(',') //Retorna [ 'Olá', 'mundo', 'do', 'JavaScript' ] // Retorna uma separação com elementos indepedente

//Métodos toUpperCase e toLowerCase.

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.toUpperCase(); //OLÁ MUNDO OLÁ MUNDO OLÁ MUNDO 
var result2 = str.toLowerCase(); //olá mundo olá mundo olá mundo

//Método search.

var str = "Olá Mundo Olá Mundo Olá Mundo ";
var result = str.search("Mundo"); //Retorna 4