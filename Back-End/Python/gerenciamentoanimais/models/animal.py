from gerenciamentoanimais.models.dono import Dono

class Animal:
    def __init__(self,nome: str,idade: int,especie: str,dono: Dono) -> None:
        self.nome = nome
        self.idade = idade
        self.especie = especie
        self.dono = dono
        
    def exibirInformações(self) -> str:
        return(f"Nome: {self.nome}"
               f"Idade: {self.idade}"
               f"Especie: {self.especie}"
               f"Dono: {self.dono}"
               )
    