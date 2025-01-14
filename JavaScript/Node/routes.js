const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeControllers')
const loginController = require('./src/controllers/loginControllers')

// Rotas da home
route.get('/', homeController.index)

// Rotas de login
route.get('/login', loginController.index)

module.exports = route