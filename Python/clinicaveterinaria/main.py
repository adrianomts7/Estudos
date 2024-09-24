from clinicaveterinaria.models.animal import Animal
from clinicaveterinaria.models.dono import Dono
from clinicaveterinaria.models.servicos import Servico
from Python.clinicaveterinaria.models.clinica import Clinica

clinica = Clinica
dono = Dono("Marta","189729722")
animal = Animal("Max",8,"Cachorro",dono)
servico = Servico("Exames", 200.50)

clinica.adicionarAnimal(animal)

clinica.adicionarServico(servico)
clinica.registrarServico(animal,servico)

clinica.listaAnimal
clinica.exibirServicoPrestado