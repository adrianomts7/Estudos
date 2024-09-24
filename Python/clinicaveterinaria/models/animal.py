from clinicaveterinaria.models.dono import Dono

class Animal:
    def __init__(self,nome: str,idade: int,especie: str,dono: Dono) -> None:
        self.nome = nome
        self.idade = idade
        self.especie = especie
        self.dono = dono
        
    def __str__(self) -> str:
        return(f"\nNome: {self.nome}"
               f"\nIdade: {self.idade}"
               f"\nEspecie: {self.especie}"
               f"\nDono: {self.dono}"
               )