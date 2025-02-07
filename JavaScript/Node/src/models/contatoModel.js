const mongoose = require('mongoose')
const validator = require('validator')

const ContatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false, default: ''},
    email: {type: String, required: false, default: ''},
    telefone: {type: String, required: false, default: ''},
    criadoEm: {type: Date, required: false, default: Date.now},
})

const ContatoModel = mongoose.model('Contato', ContatoSchema)

function Contato(body){
    this.body = body
    this.erros = []
    this.contato = null
}

Contato.prototype.register = async function(){
    this.valida()
    if(this.erros.length > 0) return
    this.contato = await ContatoModel.create(this.body)
}

Contato.prototype.valida = function(){
    this.cleanUp()
     // Validando os campos
    // o  precisa ser válido
    if(this.body.email && !validator.isEmail(this.body.email)) this.erros.push('E-mail invalido')
    if(!this.body.nome) this.erros.push('Nome é um campo obrigatorio')  
    
    if(!this.body.email && !this.body.telefone){
        this.erros.push('Pelo menos um contato precisa ter: e-mail ou telefone')
    }
}

Contato.prototype.cleanUp = function(){
    for(let key in this.body){
    if(typeof this.body[key] !== 'string'){
        this.body[key] = ''
    }
    }
        
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    }
}

Contato.prototype.edit = async function(id){
    if(typeof id !== 'string') return
    this.valida()
    if(this.erros.length > 0) return

    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true })
}

// Métodos estaticos (Não acessar o this)

Contato.buscaPorId = async function(id){
    if(typeof id !== 'string') return
    const user = await ContatoModel.findById(id)
    return user
}

Contato.buscaContatos = async function(){
    const contatos = await ContatoModel.find()
        .sort( {criadoEm: -1} ) //Para filtar em ordem decrescente
    return contatos
}

Contato.delete = async function(id){
    if(typeof id !== 'string') return
    const contato = await ContatoModel.findOneAndDelete({_id: id})
    return contato
}

module.exports = Contato