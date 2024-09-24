from models.animal import Animal
from models.servicos import Servico

class Clinica:
    
    def __init__(self) -> None:
        self.listaDeAnimais = []
        self.listaDeServicos = []
        self.servicoPrestado = []
    
    def listaAnimal(self):
        print('Animais Registrados na Clinica')
        for animal in self.listaDeAnimais:
            print(f'{animal}')
    
    def adicionarServico(self,servico: Servico):
        self.listaDeServicos.append(servico)
            
    def adicionarAnimal(self,animal: Animal):
        self.listaDeAnimais.append(animal)
        print("Animal Registrado!")
        
    def registrarServico(self, animal: Animal, servico: Servico):
        self.servicoPrestado.append(animal,servico)
        print('Serviço Registrado com Sucesso')
        
    def exibirServicoPrestado(self):
        print('Serviços Prestados')
        for servicoPrestado in self.servicoPrestado:
            print(f'{servicoPrestado}')