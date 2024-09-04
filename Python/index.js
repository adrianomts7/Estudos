//(condição) ? 'Valor para verdadeiro' : "Valor para falso"
const pontuacaoUsuario = 500
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuario vip" : "Usuario Normal"

const corUsuario = "";
const corPadrao = corUsuario || "Preta"

console.log(nivelUsuario)
console.log(corPadrao)