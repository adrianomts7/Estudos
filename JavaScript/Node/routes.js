const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/homeControllers')
const loginController = require('./src/controllers/loginControllers')
const contatoControllers = require('./src/controllers/contatoControllers')

const { loginRequired } = require('./src/middlewares/middleware')

// Rotas da home
route.get('/', homeController.index)

// Rotas de login
route.get('/login', loginController.index)
route.post('/login/register', loginController.register)
route.post('/login/login', loginController.login)
route.get('/login/logout', loginController.logout)

// Rotas de Contatos
route.get('/contato', loginRequired,contatoControllers.index)
route.post('/contato/register', loginRequired, contatoControllers.register)
route.get('/contato/index/:id', loginRequired, contatoControllers.editIndex)

module.exports = route