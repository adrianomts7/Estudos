/// 705.484.450-52 - 070.987.720-03
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
        const primeiroDigito = ValidaCPF.geraDigito(cpfSemDigitos)
        const segundoDigito = ValidaCPF.geraDigito(cpfSemDigitos + primeiroDigito)

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

let validacpf = new ValidaCPF('070.987.720-03')
validacpf = new ValidaCPF('999.999.999-99')

if(validacpf.valida()){
    console.log("CPF válido")
}
else{
    console.log('CPF invalido')
}