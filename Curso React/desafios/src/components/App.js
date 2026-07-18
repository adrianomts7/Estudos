import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";

export default function App() {
  return (
    <div>
      <GeradorFatura />
    </div>
  ); 
}

function GeradorFatura() {
  const [isModal, setIsModal] = useState(false);
  const [listaClientes, setListaClientes] = useState([{ id: 1, faturas: [{nome: 'Adriano', descricao: 'Manutenção', valor: 20}], valorTotal: 20 }]);

  const [mostrarMaisInfo, setMostrarMaisInfo] = useState(null);

  function mostrarMaisInfoFatura(idSelecionado) {
    console.log(mostrarMaisInfo);
    setMostrarMaisInfo(id => id === idSelecionado ? null : idSelecionado);
  }

  function novaFatura(fatura, idCliente) {
    setListaClientes(clientes => [...clientes, { id: idCliente, faturas: [fatura], valorTotal: fatura.valor * fatura.quantidade }]);
  }
  
  function adicionarNovaFaturaCliente(idCliente, fatura) {
    setListaClientes(clientes => clientes.map(cliente => cliente.id === idCliente ? {...cliente, faturas: [...cliente.faturas, fatura], valorTotal: cliente.valor + fatura.valor } : cliente));
  }

  return <div className="container">
    <Header setIsModal={setIsModal} />
    { isModal && <FormFatura setIsModal={setIsModal} isModal={isModal} onAdicionarFatura={novaFatura} />}
    <ListaFaturas listaClientes={listaClientes} mostrarMaisInfo={mostrarMaisInfo} onMostrarMaisInfo={mostrarMaisInfoFatura} />
  </div>
}

function Header({setIsModal}) {
  return (
    <header>
      <h1 className="titulo">Gerador de Fatura</h1>
      <button className="btn-abrir-modal" onClick={() => setIsModal(true)}>Cadastrar Nova Fatura</button>
    </header>
  );

}
function FormFatura({setIsModal, isModal, onAdicionarFatura}) {

  const [fatura, setFatura] = useState({id: crypto.randomUUID() ,nome: '', descricao: '', quantidade: 1, valor: ''});

  function pegandoDadosInput(e) {
    const { name, value } = e.target;

    setFatura(dados => ({...dados, [name]: value}));
  }


  function cadastrarFatura(e) {
    e.preventDefault();

    fatura.valor = Number(fatura.valor);

    if (fatura.nome.trim() === "" || fatura.descricao.trim() === "") return alert("Os campos não podem ficar vázio!");
    if (fatura.valor < 0) return alert("Digite um valor de serviço válido");

    onAdicionarFatura(fatura, fatura.id)
    alert("Fatura gerada com sucesso!")
    setIsModal(false);
  }

  return (
    <div className="sombra">
      <form className="form-fatura" onSubmit={cadastrarFatura}>
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


        <button className="fechar-form-fatura"value={isModal} onClick={() => setIsModal(false)}><HiOutlineX /></button>
      </form>
    </div>
  );
}

function ListaFaturas({ listaClientes, mostrarMaisInfo, onMostrarMaisInfo }) {
  return (
    <ul className="lista-faturas">
        { listaClientes.length > 0 ? listaClientes.map(fatura => <Fatura fatura={fatura} key={fatura.id} mostrarMaisInfo={mostrarMaisInfo} onMostrarMaisInfo={onMostrarMaisInfo} />) : <p className="mensagem-fatura-vazia">Nenhuma Fatura de Clientes Registradas!</p> }
    </ul>
  );
}

function Fatura({fatura, onMostrarMaisInfo, mostrarMaisInfo}) {

  return <li style={mostrarMaisInfo === fatura.id ? { border: '3px solid var(--verde)', padding: '2rem 0.8rem'} : {}}>
    <div>
      <p className="nome-cliente">Nome do Cliente: {fatura.faturas[0].nome}</p>
      
      <div className="area-faturas">
        <p>Quantidade de Produtos Solicitados: <span className="quantidade-produtos">{fatura.faturas.length} </span></p>
        
        <p>Valor Total: <span className="valor-total-fatura">R$ {fatura.valorTotal}</span></p>
      </div>
      
      { mostrarMaisInfo === fatura.id && <DivDadosFatura fatura={fatura} /> }
     
      <div className="area-butoes-fatura">
        <button className="btn-mostrar-mais" onClick={() => onMostrarMaisInfo(fatura.id)}>{ mostrarMaisInfo ? "Ocultar Infos" : "Mostrar Infos" }</button>
        <button className="btn-adicionar-nova-fatura">Adicionar Nova Fatura para {fatura.faturas[0].nome}</button>
      </div>
    </div>
  </li>
}

function DivDadosFatura({ fatura }) {
  return (  
    <div className="area-dados-fatura">
      <p className="titulo-descricao-produtos">Descrição dos Produtos Solicitados:</p>
      { fatura.faturas.map((fatura, i) => 
        <div className="area-dados" key={fatura.id} >
           
          <p>{(i + 1)}º  Descrição: {fatura.descricao}</p>  
          <p>Quantidade: {fatura.quantidade}</p>
          <p>Valor: <span className="valor">R$ {fatura.valor}</span></p>
        </div> 
      )}
    </div>
  )
}