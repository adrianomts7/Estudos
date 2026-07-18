import Fatura from "./Fatura";

export default function ListaFaturas({ listaClientes, mostrarMaisInfo, onMostrarMaisInfo }) {
  return (
    <ul className="lista-faturas">
        { listaClientes.length > 0 ? listaClientes.map(fatura => <Fatura fatura={fatura} key={fatura.id} mostrarMaisInfo={mostrarMaisInfo} onMostrarMaisInfo={onMostrarMaisInfo} />) : <p className="mensagem-fatura-vazia">Nenhuma Fatura de Clientes Registradas!</p> }
    </ul>
  );
}