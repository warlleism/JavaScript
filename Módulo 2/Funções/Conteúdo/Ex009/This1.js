'use strict';
//O strict impede que o escopo local puxe informações do escopo global
//Então o this.name não será puxado para dentro do escopo local da function
//O strict padroniza/delimita o escopo do this para evitar erros
//Sem o strict no contexto de função ele pega o this no escopo global
//Mas no contexto de função dentro do objeto ele não pega do contexto global.


this.nome = "Wallei";

console.log(this.nome)



/*
function mostrar () {
    this.nome = "Wallei";
    console.log(this.nome)
}

mostrar();*/


const user  = {
    name: "Warllei Martins",
    sayMyName: function(){//método
        console.log(this.name);
    }
};

user.sayMyName()

