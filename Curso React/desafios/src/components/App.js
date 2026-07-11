import { useState } from "react";

export default function App() {
  return (
    <div>
      <FormCheckout />
    </div>
  ); 
}

function FormCheckout() {
  const [dadosCompra, setDadosCompra] = useState({ tipoProduto: '', nome: '', email: '', cep: '', rua: '', numero: '', frequencia: '', termos: false })
  
  function submitForm(e) {
    e.preventDefault(); 
    let dadosCompraFinal = { tipoProduto: dadosCompra.tipoProduto, nome: dadosCompra.nome, email: dadosCompra.email };

    if (dadosCompra.nome.trim() === "" || dadosCompra.email.trim() === "") return alert('Os campos NOME e EMAIL não podem ficar vázio');
    
    if (dadosCompra.tipoProduto === 'fisico') {
      if (dadosCompra.cep.length !== 8) return alert('CEP inválido');
      if (dadosCompra.numero.length === 0 || dadosCompra.rua.length === 0) return alert('Os campos de endereço não podem ficar vázio, digite valores válidos!');
      dadosCompraFinal = {...dadosCompraFinal, cep: dadosCompra.cep, numero: dadosCompra.numero, rua: dadosCompra.rua};
    }

    if (dadosCompra.tipoProduto === 'digital') {
      if (!dadosCompra.termos) return alert('Aceite os nossos termos de uso');
      if (dadosCompra.frequencia.trim() === '') return alert('Escolha a frequência da cobrança');
      dadosCompraFinal = {...dadosCompraFinal, termos: dadosCompra.termos, frequencia: dadosCompra.frequencia};
    }

    alert('Compra finalizada');
    console.log(dadosCompraFinal);
    dadosCompraFinal = { tipoProduto: dadosCompra.tipoProduto, nome: dadosCompra.nome, email: dadosCompra.email };
    setDadosCompra({ tipoProduto: '', nome: '', email: '', cep: '', rua: '', numero: '', frequencia: '', termos: false });
  }
  
  function onChange(e) {  
    const { name, value, type, checked } = e.target;
  
    const valorAtualizado = type === 'checkbox' ? checked : value;

    setDadosCompra(produtos => ({...produtos, [name]: valorAtualizado}))
    console.log(dadosCompra);
  } 

  return (
    <div className='container'>
      <div className='area__titulo'>
        <h2>Finalizando Compra</h2>
        <p>Completo os campos abaixo para finalizar a compra!</p>
      </div>

      <form onSubmit={submitForm} >
        <div className='area__input'>
          <label htmlFor="tipoProduto">Tipo de Produto:</label>
          <select id='tipoProduto' name="tipoProduto" value={dadosCompra.tipoProduto} required onChange={onChange}>
            <option value=''>Selecione um tipo de produto</option>
            <option value='fisico'>Fisico</option>
            <option value='digital'>Digital</option>
          </select>
        </div>

        <div className='area__input'>
          <label htmlFor='nomeCompleto'>Nome Completo</label>
          <input type='text' placeholder="Digite o seu nome completo" name='nome' id='nomeCompleto' value={dadosCompra.nome} onChange={onChange} required />
        </div>

        <div className="area__input">
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' required placeholder="usuario@gmail.com" onChange={onChange} value={dadosCompra.email} />
        </div>

        { dadosCompra.tipoProduto === 'fisico' && <ProdutoFisico onChange={onChange} dadosCompra={dadosCompra} />}
        {dadosCompra.tipoProduto === 'digital' && <ProdutoDigital onChange={onChange} dadosCompra={dadosCompra} />}

        <button className='btn__finalizar-compra'>Finalizar Compra</button>
      </form>
    </div>
  );
}

function ProdutoFisico({onChange, dadosCompra}) {
  return (
    <div>
      <div className='area__input'>
        <label htmlFor="cep">CEP:</label>
        <input type='text' name='cep' id='cep' placeholder="00000-000" onChange={onChange} value={dadosCompra.cep} />
      </div>

      <div className='area__input'>
        <label htmlFor="rua">Rua:</label>
        <input type='text' name='rua' id='rua' placeholder="Rua de cima" onChange={onChange} value={dadosCompra.rua} />
      </div>

      <div className='area__input'>
        <label htmlFor="numero">Número:</label>
        <input type='text' name='numero' id='numero' placeholder="7" onChange={onChange} value={dadosCompra.numero} />
      </div>

    </div>
  );
}

function ProdutoDigital({onChange, dadosCompra}) {
  return (
    <div>
      <div className='area__input'>
        <label htmlFor="frequencia">Frequência da cobrança:</label>
        <select name='frequencia' onChange={onChange} value={dadosCompra.frequencia}>
          <option value=''>Escolha a Frequência da cobrança</option>
          <option value='mensal'>Mensal</option>
          <option value='anual'>Anual</option>
        </select> 
      </div>
      <div className='area__termos-uso'>
        <span>Aceita os termos de uso:</span>
        <input type='checkbox' name='termos' checked={dadosCompra.termos} required  onChange={onChange}/>
      </div>
    </div>
  );
}