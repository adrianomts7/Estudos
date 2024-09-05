function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto
   
    switch (diaSemana){
        case 0:
            diaSemanaTexto = "Domingo"
            break
        case 1:
            diaSemanaTexto = "Segunda-Feira"
            break
        case 2:
            diaSemanaTexto = "Terça-Feira"
            break
        case 3:
            diaSemanaTexto = "Quarta-Feira"
            break
        case 4:
            diaSemanaTexto = "Quinta-Feira"
            break
        case 5:
           diaSemanaTexto = "Sexta-Feira"
           break
        case 6:
            diaSemanaTexto = "Sábado" 
            break
        default:
            diaSemanaTexto = "Dia Invalido!"
            break
    }    

    return diaSemanaTexto
}

const data = new Date()
const diaSemana = data.getDay()
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)

console.log(diaSemana, diaSemanaTexto)