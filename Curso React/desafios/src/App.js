import { useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function previous(valorAtual, valorMinimo, functionInsercao, valorInsercao = 1) {
    if ((valorAtual - valorInsercao) >= valorMinimo) functionInsercao(v => v - valorInsercao);
  }

  function next(valorAtual, valorMaximo, functionInsercao, valorInsercao = 1) {
    if ((valorAtual + valorInsercao) <= valorMaximo) functionInsercao(v => v + valorInsercao);
  }

  const data = new Date();
  data.setDate(data.getDate() + count);

  return (
    <div>
      <div className="steps">
        <button onClick={() => previous(step, 1, setStep)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => next(step, 10, setStep)}>+</button> 
      </div>
      
      <div className="counter">
        <button onClick={() => previous(count, -10, setCount, step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => next(count, 100, setCount, step)}>+</button>
      </div>

      <p>{count} days { count > 0 ? 'from today' :'ago'}   {data.toDateString()}</p>

    </div>
  );
}


export default App;
