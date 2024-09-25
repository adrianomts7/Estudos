class Servico:
    def __init__(self,nomeDoServico: str,preco: float) -> None:
        self.nomeDoServico = nomeDoServico
        self.preco = preco
        
    def exibirResultado(self) -> str:
        return ( f"Nome do Serviço: {self.nomeDoServico}"
            f"Preço: R$ {self.preco}"
        )