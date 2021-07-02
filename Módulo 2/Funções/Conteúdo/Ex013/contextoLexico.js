const valor = 'Global'

function minhaFunção(){//Função declarada dentro do contexto léxico do módulo do note/arquivo js
    console.log(valor)

}

function exec(){
    const valor = 'Local'
    minhaFunção()
}

exec()//Vai ser imprimido o "Global", pq a o contexto léxico da função "minhaFunção" é global

