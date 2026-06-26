  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';

  const rawTransactions = [
    { id: 't1', ticker: 'BBDC4', type: 'Ações', operation: 'BUY', quantity: 100, price: 15.50 },
    { id: 't2', ticker: 'MXRF11', type: 'FIIs', operation: 'BUY', quantity: 200, price: 10.20 },
    { id: 't3', ticker: 'BBDC4', type: 'Ações', operation: 'BUY', quantity: 50, price: 14.80 },
    { id: 't4', ticker: 'KNRI11', type: 'FIIs', operation: 'BUY', quantity: 15, price: 155.00 },
    { id: 't5', ticker: 'MXRF11', type: 'FIIs', operation: 'BUY', quantity: 50, price: 10.50 },
    { id: 't6', ticker: 'BBDC4', type: 'Ações', operation: 'SELL', quantity: 30, price: 16.00 }
  ];

  const currentMarketPrices = {
    BBDC4: 16.20,
    MXRF11: 10.45,
    KNRI11: 158.30
  };

  function App() {
    return (
      <div className="container">
        <Header />
        <ListaTransacoes />
      </div> 
    );
  }

  function Header() {  
    const data = new Date().toLocaleDateString('pt-br');

    return(
      <header className="header">
        <h1>Transações da Bolsa de Valores</h1>
        <div className="area_header">
          <p>Todas as transações dos últimos dias aqui!</p>
          <p>Data Atual: <span className="data">{data}</span></p>
        </div>

      </header>
    )
  }

  function ListaTransacoes() {
    const transacoesAgrupadas = [];
    for(const current in currentMarketPrices) {
      transacoesAgrupadas.push(rawTransactions.filter( transacion => current === transacion.ticker));   
    }

    return (
      <main>
        <ul className="lista__transacoes">
          { transacoesAgrupadas.length > 0 ? transacoesAgrupadas.map( transacoes => <Transacao transacoes={transacoes} key={transacoes[0].id} />) : <li className="mensagem_nenhuma-transacao">Nenhuma transação feita até o momento!</li> }
        </ul>
      </main>
    )
  }

  function Transacao({transacoes}) {
    const transacoesCompra = transacoes.slice().filter(transacao => transacao.operation === 'BUY');
    const totalInvestido = transacoesCompra.reduce((acc, transacao) => acc += (transacao.quantity * transacao.price), 0);
    const quantidadeInvestida = transacoesCompra.reduce((acc, transacoes) => acc += transacoes.quantity, 0)
    const quantidadeCompra = transacoesCompra.reduce((acc, transacionBuy) => acc += transacionBuy.quantity, 0);
    const quantidadeVenda = transacoes.filter(transacao => transacao.operation === 'SELL').reduce((acc, transacionSell) => acc += transacionSell.quantity, 0);

    const quantidadeAtualizada = quantidadeCompra - quantidadeVenda;
    const precoMedio = totalInvestido / quantidadeInvestida;
    const {ticker, type } = transacoesCompra[0]; 
    const precoAtual = (quantidadeAtualizada * currentMarketPrices[ticker]);

    return (
      <li className="transacao">
          <h2 className="nome__ativo">{ticker} <span className="tipo__ativo">{type === 'Ações' ? 'Ação' : 'FII'}</span></h2>
        <div className="area__dados-ativo">
          <p className="quantidade__ativos">Quantidade: <span className="quantidade__ativos-dinamico">{quantidadeAtualizada}</span> Unidades</p>
          <p className="preco__medio">Preço Médio: <span className="preco__medio-dinamico">R$ {precoMedio.toFixed(2)}</span></p>
          <p className="preco__medio">Preço Atual: <span className="preco__medio-dinamico">R$ {precoAtual.toFixed(2)}</span></p>
        </div>
      </li>
    )
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );