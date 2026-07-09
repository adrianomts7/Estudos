import { useState } from "react";

export default function App() {
  const [satisfacaoUsuario, setSatisfacaoUsuario] = useState(0);
  const [satisfacaoAmigo, setSatisfacaoAmigo] = useState(0);
  const [valorConta, setValorConta] = useState(0);

  const mediaGorjeta = (satisfacaoUsuario + satisfacaoAmigo) / 2;

  function reset() {
    setSatisfacaoUsuario(0);
    setSatisfacaoAmigo(0);
    setValorConta(0);
  }

  return (
    <div>
      <FormValor valor={valorConta} onValorConta={setValorConta} /> 
      <FormGorjeta satisfacao={satisfacaoUsuario} onSatisfacao={setSatisfacaoUsuario} textLabel='O que você achou do serviço?' idSelect='select__voce' />

      <FormGorjeta satisfacao={satisfacaoAmigo} onSatisfacao={setSatisfacaoAmigo} textLabel='O que o seu amigo achou do serviço?' idSelect='select__usuario' /> 
      
      { valorConta > 0 && <>
          <h2>Você paga R$ {valorConta + mediaGorjeta} (R${valorConta} + R${mediaGorjeta}) </h2> 
          <button onClick={reset}>Reset</button>
        </>
      }
      </div>
  );
}

function FormValor({valor, onValorConta}) {
  function onValorForm(e) {
    const valor = Number(e.target.value);
    onValorConta(valor);
  }

  return (
    <form>
      <div className="area">
        <label>Quando deu a conta:</label>
        <input type='text' value={valor} onChange={onValorForm} />
      </div>
      </form>
  );
}

function FormGorjeta({satisfacao, onSatisfacao, textLabel, idSelect}) {
  return (
    <div>
      <form>
        <SelectSatisfacao satisfacao={satisfacao} onSatisfacao={onSatisfacao} textLabel={textLabel} idSelect={idSelect} />        
      </form>
    </div>
  );
}

function SelectSatisfacao({textLabel, idSelect, satisfacao, onSatisfacao}) {
  return (
    <div className='area'>
      <label for={idSelect}>{textLabel}</label>
      <select id={idSelect} value={satisfacao} onChange={(e) => onSatisfacao(Number(e.target.value))}>
        <option value={0}>Insatisfeita (0%)</option>
        <option value={5}>Foi tudo bem (5%)</option>
        <option value={10}>foi bom (10%)</option>
        <option value={20}>Absolutamente incrível! (20%)</option>
      </select>
    </div>
  );
}
