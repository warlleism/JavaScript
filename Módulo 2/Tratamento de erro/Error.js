function tratarErro(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message
    }
}

function imprimirNome(obj) {
    try { //bloco de código que dentro que vc acha que pode gerar erro
        console.log(obj.nome.toUpperCase() + '!!!')//Caso haja algum erro/excessão nesse bloco ele cai no catch
    } catch (e) {// ( e ) - ele pega o erro
        tratarErro(e)// ( e ) - o erro é passado ára o parâmetro da função
    } finally {//Ocorendo erro ou não esse bloco será chamado
        console.log('Final')
    }

}

const obj = {
    name: 'Warllei'
}
imprimirNome(obj)