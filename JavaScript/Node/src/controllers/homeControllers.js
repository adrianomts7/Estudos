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
    // console.log(req.session.usuario)
    req.flash('erro', 'Erro ao cadastrar cliente')
    req.flash('sucess', 'Cliente cadastrado com sucesso')
    req.info('info', 'site em manutenção')
    console.log(req.flash('erro'), req.flash('sucess'), req.flash('info'))
    res.render('index')
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}