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
  const [isModal, setIsModal] = useState(false);
  const [listaClientes, setListaClientes] = useState([{ id: 1, faturas: [{nome: 'Adriano', descricao: 'Manutenção', valor: 20}], valorTotal: 20 }]);
  const [mostrarMaisInfo, setMostrarMaisInfo] = useState(null);
  const [atualizarOuCadastrar, setAtualizarOuCadastrar] = useState('cadastrar');

  function mostrarMaisInfoFatura(idSelecionado) {
    setMostrarMaisInfo(id => id === idSelecionado ? null : idSelecionado);
  }

  function novaFatura(fatura, idCliente) {
    setListaClientes(clientes => [...clientes, { id: idCliente, faturas: [fatura], valorTotal: fatura.valor * fatura.quantidade }]);
  }
  
  function adicionarNovaFaturaCliente(idCliente, fatura) {
    setListaClientes(clientes => clientes.map(cliente => cliente.id === idCliente ? {...cliente, faturas: [...cliente.faturas, fatura], valorTotal: cliente.valor + fatura.valor } : cliente));
  }

  function moodCadastrarOuAtualizarFatura(mood = 'cadastrar', abrirModal = true) {
    setIsModal(abrirModal);
    setAtualizarOuCadastrar(mood);
  }

  return <div className="container">
    <Header moodCadastrarOuAtualizarFatura={moodCadastrarOuAtualizarFatura} />

    { isModal && <FormFatura setIsModal={setIsModal} isModal={isModal} onCadastrarFatura={novaFatura} onAdicionarFatura={adicionarNovaFaturaCliente} />}
    
    <ListaFaturas listaClientes={listaClientes} mostrarMaisInfo={mostrarMaisInfo} onMostrarMaisInfo={mostrarMaisInfoFatura} />
  </div>
}