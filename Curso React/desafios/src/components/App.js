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
  const [listaClientes, setListaClientes] = useState([]);

  
  function novaFatura(fatura, nomeCliente) {
    setListaClientes(clientes => clientes.length > 0 ? clientes.map(cliente => cliente.nome === nomeCliente ? {...cliente, listaFaturas: [...cliente.listaFaturas, fatura], valorPagar: cliente.valorPagar + fatura.valor} : cliente) : [{nome: nomeCliente, listaFaturas: [fatura], valorPagar: fatura.valor}])
  }
  console.log(listaClientes);
  
  return <div className="container">
    <Header setIsModal={setIsModal} />
    { isModal && <FormFatura setIsModal={setIsModal} isModal={isModal} onAdicionarFatura={novaFatura} />}
    <ListaFaturas />
  </div>
}

function Header({setIsModal}) {
  return (
    <header>
      <h1 className="titulo">Gerador de Fatura</h1>
      <button className="btn-abrir-modal" onClick={() => setIsModal(true)}>Cadastrar Fatura</button>
    </header>
  );

}
function FormFatura({setIsModal, isModal, onAdicionarFatura}) {

  const [fatura, setFatura] = useState({nome: '', descricao: '', quantidade: 1, valor: ''});

  function pegandoDadosInput(e) {
    const { name, value } = e.target;

    setFatura(dados => ({...dados, [name]: value}));
  }


  function cadastrarFatura(e) {
    e.preventDefault();

    fatura.valor = Number(fatura.valor);

    if (fatura.nome.trim() === "" || fatura.descricao.trim() === "") return alert("Os campos não podem ficar vázio!");
    if (fatura.valor < 0) return alert("Digite um valor de serviço válido");

    onAdicionarFatura(fatura, fatura.nome)
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

function ListaFaturas() {
  return (
    <ul className="lista-faturas">
        <Fatura fatura={{ nome: "Adriano", quantidade: 2, descricao: "Limpeza do Computador", valor: 20 }} />
    </ul>
  );
}

function Fatura({fatura}) {
  return <li>
    <div>
      <p>Nome do Cliente: {fatura.nome}</p>
      <p>Produto Solictado: {fatura.descricao}</p>
      <p>Quantidade: {fatura.quantidade }</p>
    </div>
  </li>
}