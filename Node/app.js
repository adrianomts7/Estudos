// const { nome, sobrenome, falaNome} = require('./mod1')
// console.log(nome, sobrenome)
// console.log(falaNome())

const path = require('path')
const axios = require('axios')
const { Pessoa } = require('./mod1')
const mod1 = require('./mod1')

const p1 = new Pessoa('Adriano')
console.log(p1)
console.log(mod1)