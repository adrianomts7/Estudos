from models.animal import Animal

class Dono:
    def __init__(self,nome: str,telefone: str) -> None:
        self.nome = nome
        self.telefone = telefone
        self.listaDeAnimal = []
        
    def adicionarAnimal(self,animal: Animal):
        self.listaDeAnimal.append(animal)
        
    def exibirAnimal(self):
        for animal in self.listaDeAnimal:
            print(f'{animal}')
            
    def __str__(self) -> str:
        return(f"\nNome: {self.nome}"
            f"\nTelefone: {self.telefone}"
            )
        