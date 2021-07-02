//Formato String JSON

const dados = `{
    "nome": "Warllei",
    "sobrenome": "Martins",
    "idade": 25,
    "programador": true,
    "ferramentas": ["JS", "HTML", "CSS", "SQL"],
    "Amigos": [{
        "nome": "Rafael",
        "sobrenome": "Honorio"
    },
    {
        "nome": "Geusa",
        "sobrenome": "Moreira"
    }]
}`;


console.log(dados)
console.log("//////////////////////////////")
console.log(JSON.parse(dados))//Convertendo JSON para OBJETO