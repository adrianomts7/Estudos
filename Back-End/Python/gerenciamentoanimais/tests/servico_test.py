import pytest

from gerenciamentoanimais.models.servico import Servico

@pytest.fixture
def servico():
    return Servico("Exame",250.00)

def test_nome_servico(servico):
    assert servico.nomeDoServico == "Exame"
    
def test_valor_servico(servico):
    assert servico.preco == 250.00
    