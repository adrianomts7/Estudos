// factory function (Função Fabrica)
function criaPessoa(nome,sobrenome,altura,peso){
    return{
        nome,
        sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        fala(assunto = 'Falando sobre nada'){
            return `${this.nome} esta ${assunto}.`
        },

        altura: altura,
        peso: peso,

        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    
    }
}

const p1 = criaPessoa('Adriano','Mateus',1.7,60)
p1.nomeCompleto = "Joanice dos Santos"
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())