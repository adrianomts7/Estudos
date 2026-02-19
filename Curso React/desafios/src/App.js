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

  const data = new Date();
  data.setDate(data.getDate() + count);

  function handleClickButtonCount(e, decrease = false, step, count) {
    e.preventDefault();
    
    !decrease ? setCount(count += step) : setCount(count -= step);
  } 

  function handleInputStep(value) {
    setStep(value);
  }

  function resetNumbersCountStep() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div className="steps">
        <input type="range" min={1} max={10} value={step} step={1} onChange={e => setStep(+e.target.value)} /> <p>{step > 10 ? 10 : step}</p>
      </div>
      
      <div className="counter">
        <button onClick={e => handleClickButtonCount(e, true, step, count)}>-</button>
        <input type="text" value={step} onChange={e => handleInputStep(+e.target.value)} />
        <button onClick={e => handleClickButtonCount(e, false, step, count)}>+</button>
      </div>

      {
        count !== 1 || count !== 0 ?
        <button onClick={resetNumbersCountStep}>Reset</button> :
        null
      }

      <p>{count} days { count > 0 ? 'from today' :'ago'}   {data.toDateString()}</p>

    </div>
  );
}

export default App;
