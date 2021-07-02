const func = function(){
    console.log(this)//Retorna um objeto window
}

const arrowFunc = () => console.log(this)//Retorna um objeto vazio

func()
arrowFunc()