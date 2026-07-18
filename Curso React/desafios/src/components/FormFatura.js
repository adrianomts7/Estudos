import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";

export default 
function FormFatura({setIsModal, isModal, onCadastrarFatura, onAdicionarFatura, dadosAtualizar, onDadosAtualizar }) {

  const [fatura, setFatura] = useState({id: crypto.randomUUID() ,nome: dadosAtualizar?.nome || '', descricao: '', quantidade: 1, valor: ''});

  function pegandoDadosInput(e) {
    const { name, value } = e.target;

    setFatura(dados => ({...dados, [name]: value}));
  }
  
  function enviarForm(e) {
    e.preventDefault();
    
    fatura.valor = Number(fatura.valor);
    
    if (fatura.nome.trim() === "" || fatura.descricao.trim() === "") return alert("Os campos não podem ficar vázio!");
    if (fatura.valor < 0) return alert("Digite um valor de serviço válido");

    if (dadosAtualizar) {
      onAdicionarFatura(dadosAtualizar.id, fatura);
      alert(`Nova Fatura adicionada com sucesso ao cliente ${fatura.nome}`)
      onDadosAtualizar(null);
    } else {
      console.log(fatura.id);
      onCadastrarFatura(fatura, fatura.id)
      alert("Fatura gerada com sucesso!")
    }

    setIsModal(false);
  }

  return (
    <div className="sombra">
      <form className="form-fatura" onSubmit={enviarForm}>
        <h3 className="titulo-form">Cadastro de Fatura</h3>

        <div className="area-input">
          <label htmlFor="nome">Nome:</label>
          <input id="nome" name="nome" type="text" placeholder="Digite o nome do cliente" onChange={pegandoDadosInput} value={fatura.nome} />
        </div>

        <div className="area-input">
          <label htmlFor="descricao">Descrição:</label>
          <input id="descricao" name="descricao" type="text" placeholder="Digite a Descrição do Serviço: " onChange={pegandoDadosInput} value={fatura.descricao} />
        </div>

        <div className="area-input">
          <label htmlFor="quantidade">Quantidade:</label>
          <input id="quantidade" name="quantidade" type="number" placeholder="1" onChange={pegandoDadosInput} min={1} value={fatura.quantidade} />
        </div>

        <div className="area-input">
          <label htmlFor="valor">Valor:</label>
          <input id="valor" name="valor" type="text" placeholder="Digite o valor do serviço: R$ 20,00" onChange={pegandoDadosInput} value={fatura.valor} />
        </div>

        <button className="btn-form-fatura">Gerar Fatura</button>

        <button className="fechar-form-fatura" onClick={() => setIsModal(false)}><HiOutlineX /></button>
      </form>
    </div>
  );
}
