from gerenciamentoanimais.models.animal import Animal
from gerenciamentoanimais.models.servico import Servico

class clinica:
    def __init__(self) -> None:
        self.listaAnimais = []
        self.listaServicos = []
        
    def adicionarAnimal(self,animal: Animal):
        self.listaAnimais.append(animal)
        
    def registrarServicos(self,animal: Animal, servico: Servico):
        self.listaServicos.append(animal,servico)
        
    def exibirAnimais(self):
        for animal in self.listaAnimais:
            print(f"{animal}")