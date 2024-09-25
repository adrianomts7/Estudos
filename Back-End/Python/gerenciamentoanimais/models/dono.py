from gerenciamentoanimais.models.animal import Animal

class Dono:
    def __init__(self,nome: str,telefone: str) -> None:
        self.nome = nome
        self.telefone = telefone
        self.listaDeAnimais = []
        
    def adicionarAnimal(self,animal: Animal):
        self.listaDeAnimais.append(animal)
        print(f"o {animal} Foi adicionado na lista")
        
    def exibirAnimais(self):
        for animal in self.listaDeAnimais:
            print(f"{animal}")
    