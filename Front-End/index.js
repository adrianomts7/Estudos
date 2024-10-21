function ValidaCPF(cpfEnviado){
    Object.defineProperty(this,'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype.valido = function() {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencial()) return false
    
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const primeiroDigito = this.criaDigito(cpfParcial)
    const segundoDigito = this.criaDigito(cpfParcial + primeiroDigito)
    
    const novoCpf = cpfParcial + primeiroDigito + segundoDigito

    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1

    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo --
        return ac
    }, 0)

    const digito = 11 - (total % 11)

    return digito > 9 ? '0' : String(digito)
}

ValidaCPF.prototype.isSequencial = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCPF('705.484.450-52')

if(cpf.valido()){
    console.log('Cpf Valido')
}
else {
    console.log('Cpf Invalido')
}