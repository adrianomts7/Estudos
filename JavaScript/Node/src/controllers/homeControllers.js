const HomeModel = require('../models/HomeModels')

// Inserindo dados
// HomeModel.create({
//     titulo: 'Outra coisa',
//     descricao: 'outra descrição (Testes)',
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e))

//Ver todos os dados do banco de dados
HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
    res.render('index')
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}