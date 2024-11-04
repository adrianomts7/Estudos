class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')

        this.eventos()
    }
    
    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

        if(camposValidos && senhasValidas){
            alert('Formulario enviado')
            this.formulario.submit()
        }
    }

    senhasSaoValidas(){
        let valid = true

        const senha = this.formulario.querySelector('#senha')
        const repetirSenha = this.formulario.querySelector('#senha-repetida')

        if(senha.value !== repetirSenha.value){
            valid = false
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais')
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais')
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.')
        }

        return valid
    }

    camposSaoValidos(){
        let valid = true

        for(let erro of this.formulario.querySelectorAll('.erro')){
            erro.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            let label = campo.previousElementSibling.innerText
            
            if(!campo.value){
                this.criaErro(campo, `Campo ${label} não pode estar em branco`)
                valid = false
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCpf(campo)) valid = false
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false
            }

        }

        return valid
    }

    validaUsuario(campo){
        const usuario = campo.value
        let valid = true

        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres. ')
            valid = false
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usário precisa conter apenas letras ou números')
        }

        return true
    }

    validaCpf(campo){
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()){
            this.criaErro(campo, 'CPF Inválido')
            return false
        }

        return true
    }

    criaErro(campo, msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('erro')
        campo.insertAdjacentElement('afterend', div)
    }

}

const valida = new ValidaFormulario()


// Classe para validar cpf
class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo',{
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const primeiroDigito = this.geraDigito(cpfSemDigitos)
        const segundoDigito = this.geraDigito(cpfSemDigitos + primeiroDigito)

        this.novoCpf = cpfSemDigitos + primeiroDigito + segundoDigito
    }

    geraDigito(cpfSemDigitos){
        let total = 0
        let reverso = cpfSemDigitos.length + 1

        for(let numeroString of cpfSemDigitos){
            total += reverso * Number(numeroString)
            reverso --
            
        }
        
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }
    
    
    valida(){
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.eSequencia()) return false
        
        this.geraNovoCpf()

        return this.novoCpf === this.cpfLimpo
    }

}