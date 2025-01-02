exports.paginaInicial = (req, res) => {
    res.send(`
      <form action="/" method="POST">
        Nome do Cliente: <input type"text" name="nome">
        <br>
        Sobrenome do Cliente <input type="text" name="sobrenome">
        <button>Concluir cadastro</button>
        </form>  
    `)
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST ')
}