import pytest

from gerenciamentoanimais.models.dono import Dono
from gerenciamentoanimais.models.animal import Animal

@pytest.fixture
def dono():
    return Dono("Maria","9271981791")

def test_nome_dono(dono):
    assert dono.nome == "Maria"