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
    preco: "34,82",
    dividendYield: "15,42%",
  },
  {
    id: 2,
    ticker: "VALE3",
    empresa: "Vale S.A.",
    setor: "Mineração",
    cnpj: "33.592.510/0001-54",
    preco: "58,47",
    dividendYield: "8,13%",
  },
  {
    id: 3,
    ticker: "ITUB4",
    empresa: "Itaú Unibanco",
    setor: "Bancário",
    cnpj: "60.701.190/0001-04",
    preco: "38,15",
    dividendYield: "7,95%",
  },
  {
    id: 4,
    ticker: "BBDC4",
    empresa: "Banco Bradesco",
    setor: "Bancário",
    cnpj: "60.746.948/0001-12",
    preco: "17,85",
    dividendYield: "8,12%",
  },
  {
    id: 5,
    ticker: "BBAS3",
    empresa: "Banco do Brasil",
    setor: "Bancário",
    cnpj: "00.000.000/0001-91",
    preco: "26,71",
    dividendYield: "10,83%",
  },
  {
    id: 6,
    ticker: "WEGE3",
    empresa: "WEG",
    setor: "Máquinas e Equipamentos",
    cnpj: "84.429.695/0001-11",
    preco: "45,10",
    dividendYield: "1,56%",
  },
  {
    id: 7,
    ticker: "ABEV3",
    empresa: "Ambev",
    setor: "Bebidas",
    cnpj: "07.526.557/0001-00",
    preco: "12,93",
    dividendYield: "5,34%",
  },
  {
    id: 8,
    ticker: "MGLU3",
    empresa: "Magazine Luiza",
    setor: "Varejo",
    cnpj: "47.960.950/0001-21",
    preco: "9,84",
    dividendYield: "0,00%",
  },
];

function App() {
  return (
    <div className="container">
      {ativos.map((ativo) => (
        <CardAtivo key={ativo.id} dadosAtivos={ativo} />
      ))}
    </div>
  );
}

function CardAtivo({ dadosAtivos }) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const [comprarAtivo, setComprarAtivo] = useState(false);

  function acaoBotaoVerMais() {
    setMostrarDetalhes(md => !md);
    setComprarAtivo(false);
  }

  return (
    <div className="area">
      <header>
        <h1>{dadosAtivos.ticker}</h1>
        <p className="preco">
          Cotação: R$ <span className="destaque">{dadosAtivos.preco}</span>
        </p>
        <button
          className="btn__ver-mais"
          onClick={acaoBotaoVerMais}
        >
          {mostrarDetalhes ? "Ocultar Detalhes" : "Mostrar Detalhes"}
        </button>
      </header>
      {mostrarDetalhes && (
        <section>
          <p>Nome da empresa: {dadosAtivos.empresa}</p>
          <p>Setor: {dadosAtivos.setor}</p>
          <p>CNPJ: {dadosAtivos.cnpj}</p>
          <p>
            Dividend Yield:
            <span className="valor__divend">
              {dadosAtivos.dividendYield}
            </span>
          </p>
          <button
            className="comprar__acoes"
            onClick={() => setComprarAtivo((ca) => !ca)}
          >
            Comprar Ativo
          </button>
        </section>
      )}
      { comprarAtivo && <ComprarAtivo preco={dadosAtivos.preco} nome={dadosAtivos.empresa} />}
    </div>
  );
}

function ComprarAtivo({ preco, nome }) {
  const [quantidadeComprar, setQuantidadeComprar] = useState(1);


  return (
    <section className="area__compra-ativo">
      <p className="destaque">{nome}</p>
      <div className="area__quantidade">
        <button className="btn__ativo diminuir" onClick={() => setQuantidadeComprar(qc => qc > 0 ? qc - 1 : 0)}>-</button>
        <p>Quantidade: <span className="destaque">{quantidadeComprar}</span></p>
        <button className="btn__ativo aumentar" onClick={ () => setQuantidadeComprar(qc => qc + 1) }>+</button>
      </div>
      <p className="valor__Total">Total: R$ {(quantidadeComprar * Number(preco.replace(',', '.'))).toFixed(2)}</p>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
