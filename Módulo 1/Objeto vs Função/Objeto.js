const saudacao = 'Opa'; // contexto léxico = É o contexto/local no qual sua variável foi 
                       //definida fisicamente no código (local fisico no código onde a variável foi definida)

function exec(){
    const saudacaoo = 'Faala' //Contexto léxico (constante definida dentro no contexto dessa funçãos)
    return saudacaoo
}

//Objetos são grupos aninhados de chave/valor

const aluno = {
    nome: 'warllei',
    idade: 24,
    peso: 90,
    endereço:{
        logradouro:'Avenida são pedro',
        numero: 971
    }
}
aluno.moradia = 'Casa'
aluno['moradia'] = 'Apartamento'
aluno.rua = 'Av. São Pedro'
console.log(aluno)