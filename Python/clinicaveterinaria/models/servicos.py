class Servico:
    def __init__(self,nomeServico: str,preco: float) -> None:
        self.nomeServico = nomeServico
        self.preco = preco
    
    def exibirServico(self):
        return (f"\nNome do Serviço: {self.nomeServico}"
            f"Preço: R$ {self.preco}"
        )    
    