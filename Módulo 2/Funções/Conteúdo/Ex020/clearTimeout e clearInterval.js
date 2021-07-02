// clearTimeout e clearInterval


//clearInterval

var myTimer = setInterval(() => {
    let x = 0
    for (let i = 0; i < 10; i++) {
        x++
        console.log(x)
        if (x == 10) {
            clearInterval(myTimer)
        }
    }
}, 1000);


//clearTimeout

let x = 0
var myTimer = setTimeout(() => {//Deve-se passar a função para uma variável para que se possa passar como parâmetro para o clear
    for (let i = 0; i < 10; i++) { 
        if (x < 5) {
            x++
        }else{
            clearTimeout(myTimer)
            break
        }
        console.log(x)
    }
}, 1000);







