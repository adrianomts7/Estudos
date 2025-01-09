const HomeModel = require('../models/HomeModels')

// Inserindo dados
// HomeModel.create({
//     titulo: 'Outra coisa',
//     descricao: 'outra descrição (Testes)',
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e))

//Ver todos os dados do banco de dados
// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Como cria o seu site com animações',
        descricao: 'Basta estudar a trindade html, css e javascript',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8,9]
    })
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}