import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";

const ativos = [
  {
    id: 1,
    ticker: "PETR4",
    empresa: "Petrobras",
    setor: "Petróleo, Gás e Biocombustíveis",
    cnpj: "33.000.167/0001-01",
    preco: "R$ 34,82",
    dividendYield: "15,42%"
  },
  {
    id: 2,
    ticker: "VALE3",
    empresa: "Vale S.A.",
    setor: "Mineração",
    cnpj: "33.592.510/0001-54",
    preco: "R$ 58,47",
    dividendYield: "8,13%"
  },
  {
    id: 3,
    ticker: "ITUB4",
    empresa: "Itaú Unibanco",
    setor: "Bancário",
    cnpj: "60.701.190/0001-04",
    preco: "R$ 38,15",
    dividendYield: "7,95%"
  },
  {
    id: 4,
    ticker: "BBDC4",
    empresa: "Banco Bradesco",
    setor: "Bancário",
    cnpj: "60.746.948/0001-12",
    preco: "R$ 17,85",
    dividendYield: "8,12%"
  },
  {
    id: 5,
    ticker: "BBAS3",
    empresa: "Banco do Brasil",
    setor: "Bancário",
    cnpj: "00.000.000/0001-91",
    preco: "R$ 26,71",
    dividendYield: "10,83%"
  },
  {
    id: 6,
    ticker: "WEGE3",
    empresa: "WEG",
    setor: "Máquinas e Equipamentos",
    cnpj: "84.429.695/0001-11",
    preco: "R$ 45,10",
    dividendYield: "1,56%"
  },
  {
    id: 7,
    ticker: "ABEV3",
    empresa: "Ambev",
    setor: "Bebidas",
    cnpj: "07.526.557/0001-00",
    preco: "R$ 12,93",
    dividendYield: "5,34%"
  },
  {
    id: 8,
    ticker: "MGLU3",
    empresa: "Magazine Luiza",
    setor: "Varejo",
    cnpj: "47.960.950/0001-21",
    preco: "R$ 9,84",
    dividendYield: "0,00%"
  }
];

function App() {
  return (
    <div className="container">
      { ativos.map( ativo => <CardAtivo key={ativo.id} dadosAtivos={ativo} />) }
    </div>
  )
}

function CardAtivo({dadosAtivos}) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  return (
    <div className="area">
      <header>
        <h1>{dadosAtivos.ticker}</h1>
        <p className="preco">Cotação: <span className="valor">{dadosAtivos.preco}</span></p>
        <button className="btn__ver-mais" onClick={() => setMostrarDetalhes(md => !md)}>{mostrarDetalhes ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}</button>
      </header>
      { mostrarDetalhes && <section>
        <p>Nome da empresa: {dadosAtivos.empresa}</p>
        <p>Setor: {dadosAtivos.setor}</p>
        <p>CNPJ: {dadosAtivos.cnpj}</p>
        <p>Dividend Yield: <span className="valor__divend">{dadosAtivos.dividendYield}</span> </p>
      </section>  }
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
