import pytest
from pessoa.models.pessoa import Pessoa

@pytest.fixture
def registrado():
    return Pessoa('Marta',22)
        
def test_nome_valido(registrado):
    assert registrado.nome == "Marta"
    
def test_idade_valida(registrado):
    assert registrado.idade == 22