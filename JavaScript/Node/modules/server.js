const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do Cliente: <input type"text" name="nome">
        <br>
        Sobrenome do Cliente <input type="text" name="sobrenome">
        <button>Concluir cadastro</button>
        </form>
    `)
})

app.get('/teste/:idUsuario?/:parametro?', (req,res) => {
    console.log(req.params) // Parâmetro que você digita na url, a "?" é opcional
    console.log(req.query) // Parâmetro que pode poegar da url sem ser os obrigarios "params"
    // res.send(req.params)
    res.send(req.query.profissao)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome} ${req.body.sobrenome}`)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})