const venderCarro = (modelo) => {
    console.log
        (`Modelos :
    
      1 - Hatch 
      2 - Sedans
      3 - Motocicletas
      4 - Caminhonetes
      `)
      
    switch (modelo) {
        case 'Hatch':
            return `Compra efetuada com sucesso!`
        case 'Sedans':
            return "Tem certeza que não prefere este modelo?"
        case 'Motocicletas':
            return "Tem certeza que não prefere este modelo?"
        case 'Caminhonetes':
            return "Tem certeza que não prefere este modelo?"
        default:
            return "Não trabalhamos com este tipo de automóvel aqui."
    }
}

console.log(venderCarro('Hatch'))