/*
const tela = document.querySelector("h1")
tela.innerHTML = ""

let data = new Date()
let dia = data.getDay()
let mes = data.getMonth()
let ano = data.getFullYear()
let hora = data.getHours()
let minutos = data.getMinutes()

function adicionarZero(num){
    return num >= 10 ? num : `0${num}`
}

function mesTexto(mes){
    let mesTexto
    
    switch (mes){
        case 0:
            mesTexto = "Janeiro"
            break
        case 1:
            mesTexto = "Fevereiro"
            break
        case 2:
            mesTexto = "Março"
            break
        case 3:
            mesTexto = "Abril"
            break
        case 4:
            mesTexto = "Maio"
            break
        case 5:
            mesTexto = "Junho"
            break
        case 6:
            mesTexto = "Julho"
            break
        case 7:
            mesTexto = "Agosto"
            break
        case 8:
            mesTexto = "Setembro"
            break
        case 9:
            mesTexto = "Outubro"
            break
        case 10:
            mesTexto = "Novembro"
            break
        case 11:
            mesTexto = "Dezembro"
            break
        default:
            mesTexto = "Mês invalido"
    }

    return mesTexto

}

function diaTexto(dia){
    let diaTexto

    switch (dia){
        case 0:
            diaTexto = "Domingo"
            break
        case 1:
            diaTexto = "Segunda-Feira"
            break
        case 2:
            diaTexto = "Terça-Feira"
            break
        case 3:
            diaTexto = "Quarta-Feira"
            break
        case 4:
            diaTexto = "Quinta-feira"
            break
        case 5:
            diaTexto = "Sexta-Feira"
            break
        case 6:
            diaTexto = "Sábado"
            break
         default:
            diaTexto = "Dia invalido"
            break
    }
    return diaTexto
}

tela.innerHTML += `${diaTexto(dia)}, ${dia} de ${mesTexto(mes)} de ${ano} <br/>`
tela.innerHTML += `${adicionarZero(hora)}:${adicionarZero(minutos)}`
*/

//Outra Maneira de se fazer forma mais facil
/*
let h1 = document.querySelector("h1")
let data = new Date()
h1.innerHTML = data.toLocaleString('Pt-BR', {dateStyle: 'full', timeStyle: 'short'})
*/

