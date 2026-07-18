import { useState } from "react";

import Header from "./Header";
import FormFatura from "./FormFatura";
import ListaFaturas from "./ListaFatura";

export default function App() {
  return (
    <div>
      <GeradorFatura />
    </div>
  ); 
}

function GeradorFatura() {
  const [nomePesquisado, setNomePesquisado] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [listaClientes, setListaClientes] = useState([]);
  const [mostrarMaisInfo, setMostrarMaisInfo] = useState(null);
  const [dadosAtualizar, setDadosAtualizar] = useState(null);
  

  function mostrarMaisInfoFatura(idSelecionado) {
    setMostrarMaisInfo(id => id === idSelecionado ? null : idSelecionado);
  }

  function novaFatura(fatura, idCliente) {
    setListaClientes(clientes => [...clientes, { id: idCliente, faturas: [fatura], valorTotal: fatura.valor * fatura.quantidade }]);
  }
  
  function adicionarNovaFaturaCliente(idCliente, fatura) {
    setListaClientes(clientes => clientes.map(cliente => cliente.id === idCliente ? {...cliente, faturas: [...cliente.faturas, fatura], valorTotal: cliente.valorTotal + (fatura.valor * fatura.quantidade) } : cliente));
  }

  return <div className="container">
    <Header onIsModal={setIsModal} />

    { isModal && <FormFatura setIsModal={setIsModal} isModal={isModal} onCadastrarFatura={novaFatura} onAdicionarFatura={adicionarNovaFaturaCliente} dadosAtualizar={dadosAtualizar} onDadosAtualizar={setDadosAtualizar} />}
    
    <CampoComplementar listaClientes={listaClientes} />

    <ListaFaturas listaClientes={lis} mostrarMaisInfo={mostrarMaisInfo} onMostrarMaisInfo={mostrarMaisInfoFatura} onIsModal={setIsModal} onDadosAtualizar={setDadosAtualizar} />
    
  </div>
}

function CampoComplementar({ listaClientes }) {
  const valorTotalFaturasClientes = listaClientes.reduce((acc, clientes, i) => acc += clientes.valorTotal ,0);
  const quantidadeFaturasGeradas = listaClientes.length;

  return ( 
    <div className="area-dados-complementar">
      <div className="area-dados">
        <p className="texto-dados"> Valor Total das Faturas:
          <span className="valor-total-fatura">R$ {valorTotalFaturasClientes}</span></p>
        <p className="texto-dados">Quantidade Faturas geradas <span className="quantidade">{quantidadeFaturasGeradas}</span> Faturas</p>
      </div>

      <div className="area-pesquisa">
        <input type='text' className="search" placeholder="digite o nome do cliente que deseja buscar" value={nomePesquisado} onChange={buscandoNome} />  
      </div>
    </div>
  )
}