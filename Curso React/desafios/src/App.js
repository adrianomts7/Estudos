  import { useState } from "react";

  export default function App() {
    return (
      <div className="container">
        <Step />
      </div>
    );
  }

  function Step() {
    const [value, setValue] = useState(0);
    const [passoInput, setPassoInput] = useState(1);
    const [history, setHistory] = useState([]); 
    const [operations, setOperations] = useState(0);

    function handlerAumentar(e) {
      e.preventDefault();
      if (passoInput <= 0) return;
      
      setHistory( prev => [...prev, value]);  
      setValue((prev) => (prev + passoInput));
      setOperations(op => op + 1);
    }

    function handlerDiminuir(e) {
      e.preventDefault();

      if (passoInput <= 0) return

        
      setHistory( prev => [...prev, value]);  
      setValue((prev) => (prev - passoInput));
      setOperations(op => op + 1);
    }

    function handlePasso(e) {
      const passoInput = Number(e.target.value);

      if (passoInput > 10 || passoInput < -10) return;

      setPassoInput(passoInput);
    }

    function handleReset() {
      setValue(0);
      setPassoInput(1);
      setHistory([]);
      setOperations(0);
    }

    function handleUndo(e) {
      e.preventDefault();
      if (history.length === 0)return

      const ultimoElementoHistory = history[history.length - 1];

      setValue(ultimoElementoHistory);
      setHistory(prev => prev.slice(0, -1));
      setOperations(op => op - 1);
    }

    return (
      <div>
        <form className="form">
          <div className="input__area">
            <label>Deseja pular de quanto em quanto? </label>
            <input type="number" value={passoInput} onChange={handlePasso} />
          </div>

          <p className="passos">{value}</p>

          <div className="buttons">
            <button className="button diminuir" onClick={handlerDiminuir}>
              -
            </button>
            <button className="button aumentar" onClick={handlerAumentar}>
              +
            </button>

          </div>

          <div className="buttons">
            <button className="reset button buttons__secondary" onClick={handleReset}>Reset</button>

            <button className="button buttons__secondary undo" onClick={handleUndo}>Undo</button>  
                
          </div>

        </form>

        <div className="history__container">
          {
            history && history.map( history => <p className="history" key={history}>{history}</p> )
          }
        </div>

      </div>
    );
  }
