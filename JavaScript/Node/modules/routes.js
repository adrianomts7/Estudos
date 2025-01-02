const express = require('express')
const route = express.Router()
const homeController = require('../controllers/homeControllers')
const contatoController = require('../controllers/contatoControllers')

// Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

// Rota do contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route