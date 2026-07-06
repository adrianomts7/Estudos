import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";
const ativos = [
  {
    id: 1,
    ticker: "PETR4",
    empresa: "Petrobras",
    tipo: "Ações",
    setor: "Petróleo, Gás e Biocombustíveis",
    preco: 35.42,
    variacao: 1.25,
  },
  {
    id: 2,
    ticker: "VALE3",
    empresa: "Vale",
    tipo: "Ações",
    setor: "Mineração",
    preco: 58.91,
    variacao: -0.84,
  },
  {
    id: 3,
    ticker: "ITUB4",
    empresa: "Itaú Unibanco",
    tipo: "Ações",
    setor: "Financeiro",
    preco: 39.15,
    variacao: 0.76,
  },
  {
    id: 4,
    ticker: "BBAS3",
    empresa: "Banco do Brasil",
    tipo: "Ações",
    setor: "Financeiro",
    preco: 28.63,
    variacao: 2.14,
  },
  {
    id: 5,
    ticker: "WEGE3",
    empresa: "WEG",
    tipo: "Ações",
    setor: "Industrial",
    preco: 45.87,
    variacao: -1.08,
  },
  {
    id: 6,
    ticker: "MXRF11",
    empresa: "Maxi Renda",
    tipo: "FIIs",
    setor: "Papel",
    preco: 10.12,
    variacao: 0.18,
  },
  {
    id: 7,
    ticker: "HGLG11",
    empresa: "CSHG Logística",
    tipo: "FIIs",
    setor: "Logístico",
    preco: 159.43,
    variacao: 0.64,
  },
  {
    id: 8,
    ticker: "KNRI11",
    empresa: "Kinea Renda Imobiliária",
    tipo: "FIIs",
    setor: "Híbrido",
    preco: 146.88,
    variacao: -0.52,
  },
  {
    id: 9,
    ticker: "XPML11",
    empresa: "XP Malls",
    tipo: "FIIs",
    setor: "Shopping Centers",
    preco: 103.27,
    variacao: 1.11,
  },
  {
    id: 10,
    ticker: "VISC11",
    empresa: "Vinci Shopping Centers",
    tipo: "FIIs",
    setor: "Shopping Centers",
    preco: 118.54,
    variacao: -0.33,
  },
];

function App() {
  const [ativoExibir, setAtivoExibir] = useState('todos');
  const listaAtivos = ativos.filter( ativo => ativoExibir === 'todos' || ativoExibir === ativo.tipo );

  return (
    <div className="container">
      <h1 className="titulo">Lista de Ativos</h1>
      <div className="area__select-ativo">
        <p>Selecione os ativos que deseja: </p>
        <select name="ativo-select" className="select__ativos" value={ativoExibir} onChange={(e) => setAtivoExibir(e.target.value)}>
          <option value="todos">Todos</option>
          <option value="FIIs">Fiis</option>
          <option value="Ações">Ações</option> 
        </select>      
      </div>

      <ul>
        { listaAtivos.map( ativo => <ListaAtivos ativo={ativo} key={ativo.id} /> ) }
      </ul>

    </div>
  );
}

function ListaAtivos({ativo}) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  return (
    <div className="area__lista-ativos">
      <li className="ativo">
        <div className="area__principal">
        <div className="nomes__ativos">
          <h2 style={ativo.tipo === 'FIIs' ? { color: '#1971c2'} : {color: '#2b8a3e' }}>{ativo.empresa}</h2>
          <p className="ticker__ativo">{ativo.ticker}</p>
        </div>
        <div className="area__cotacao-botao">
          {!mostrarDetalhes && <p className="cotacao">R$ {ativo.preco}</p>}
          <button className="btn__mostrar-detalhes" onClick={() => setMostrarDetalhes(md => !md)}>{mostrarDetalhes ? 'Ocultar detalhes' : 'Mostrar detalhes'}</button>
        </div>
        </div>
        { mostrarDetalhes && <div className="detalhes__ativos">
          <p>Cotação: <span className="cotacao">R$ {ativo.preco}</span></p>
          <p>Setor: {ativo.setor}</p>
          <p>Variação: <span style={ativo.variacao < 0 ? { color: '#e03131' } : {color: '#2b8a3e'}}>{ativo.variacao}</span></p>
        </div> }
      </li>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
