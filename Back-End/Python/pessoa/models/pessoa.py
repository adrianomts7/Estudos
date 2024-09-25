class Pessoa:
    def __init__(self,nome: str,idade: str) -> None:
        self.nome = nome
        self.idade = idade
        
    def __str__(self) -> str:
        return (f"Nome: {self.nome}"
                f"\nIdade: {self.idade}"
                )
    