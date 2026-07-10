import { useState } from "react";

export default function App() {
  return (
    <div>
      <AberturaChamado />
    </div>
  ); 
}

function AberturaChamado() {
  const [chamado, setChamado] = useState([]);

  return (
    <div className='container'>
      <Header />
      <Form onChamado={setChamado} />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Abertura de Chamado</h1>
    </header>
  );
}

function Form({ onChamado }) {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [telefones, setTelefones] = useState([]);
  const [urgente, setUrgente] = useState(false);

  function handlerSubmit(e) {
    e.preventDefault();

    if (titulo.length < 1 && telefones.length < 1 && categoria.length < 1) {
      alert('Os campos abaixos não podem ficar vázio!');
      return;
    }

    if (titulo.length < 4) {
      alert('Digite um titulo de chamado válido!');
      return;
    } 
    
    if (categoria.length < 2) {
      alert('Escolha uma categoria de Serviço válida');
      return;
    }

    if (telefones.length < 2) {
      alert('Cadastre pelo menos 2 telefones válidos')
      return;
    }

    const chamado = { titulo, categoria, telefones, urgente }

    setTitulo('');
    setCategoria('');
    setTelefones([]);
    setUrgente(false);

    onChamado(chamados => [...chamados, chamado]);
    alert('Chamado registrado com sucesso!');
  }
  
  return (
    <form className="form__principal" onSubmit={handlerSubmit}>
      <div className="area__input">
        <label htmlFor='titulo'>Titulo:</label>
        <input type='text' id='titulo' placeholder="Qual a demanda" value={titulo} onChange={e => setTitulo(e.target.value)} />
      </div>

      <div className="area__input">
        <label htmlFor='categoria'>Categoria:</label>
        <select id='categoria' value={categoria} onChange={e => setCategoria(e.target.value)}>
          <option value=''>Escolha uma opção</option>
          <option value='hardware'>Hardware (Problema no Computador)</option>
          <option value='software'>Software (Instalar Sistema Operacional)</option>
          <option value='redes'>Redes (Wifi caindo)</option>
          <option value='desenvolvimento'>Desenvolvimento (Criação de Sites/App)</option>
          <option value='consultoria'>Consultoria (Dúvidas, Orçamentos)</option>
        </select>
      </div>

      <div className="area__input-checkbox">
        <label htmlFor="urgencia">Urgênte:</label>
        <input type='checkbox' id='urgencia'checked={urgente} onChange={e => setUrgente(e.target.checked)} />
      </div>

      <Telefones telefones={telefones} onTelefones={setTelefones} />

      <button className='btn__cadastrar-chamado'>Registrar Chamado</button>
    </form>
  )
}

function Telefones({ telefones, onTelefones }) {
  const [telefone, setTelefone] = useState('');

  function cadastrarTelefone(e) {
    e.preventDefault(); 
    if (telefone.length < 5) return;

    onTelefones(telefones => [...telefones, telefone])
    setTelefone('');
  }

  function removerTelefone(indice, e) {
    e.preventDefault();

    onTelefones(telefones => telefones.filter((telefone, i) => i !== indice))
  }

  return (
    <div>
      
      <div className='area__input-telefone'>
        <label htmlFor='telefone'>Telefone: </label>
        <input id='telefone' type='text' placeholder="Digite um telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
        <button className='btn__cadastro-telefone' onClick={cadastrarTelefone}>Cadastrar Telefone</button>
      </div>

      <div className="area__telefones">
          { telefones.map((telefone, i) =><p className='telefone' key={i}>{`Telefone: ${i + 1}`}:{telefone}{ telefones.length > 1 &&<button className="apagar__telefone" onClick={(e) => removerTelefone(i, e)}>Apagar</button>}</p>)}
      </div>
    </div>
  );
}
