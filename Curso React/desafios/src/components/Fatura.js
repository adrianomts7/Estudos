
export default function Fatura({fatura, onMostrarMaisInfo, mostrarMaisInfo}) {

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
        <button className="btn-adicionar-nova-fatura" >Adicionar Nova Fatura para {fatura.faturas[0].nome}</button>
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