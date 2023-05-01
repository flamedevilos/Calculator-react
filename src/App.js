import { useState } from "react";
import "./App.css";

function App() {
  const numbers = () => {
    const arrNumbers = [];
    for (let index = 1; index <= 9; index++) {
      arrNumbers.push(
        <button key={index} onClick={() => addOp(index.toString())}>
          {index}
        </button>
      );
    }
    return arrNumbers;
  };

  const [calcul, setCalcul] = useState("");
  const [result, setResult] = useState("");
  const operators = ["/", "*", "-", "+", "."];

  const addOp = (value) => {
    if (
      (operators.includes(value) && calcul === "") ||
      (operators.includes(value) && operators.includes(calcul.slice(-1)))
    ) {
      return;
    }
    setCalcul(calcul + value);

    if (!operators.includes(value)) {
      setResult(eval(calcul + value).toString());
    }
  };

  const enterOp = () => {
    setCalcul(eval(calcul).toString());
  };

  const delNumb = () => {
    if (calcul == "") {
      return;
    }
    const value = calcul.slice(0, -1);
    setCalcul(value);
  };

  return (
    <>
      <div className="App">
        <div className="calculator">
          <div className="monitor">{calcul || "0"}</div>
          <div className="operator">
            <button onClick={() => addOp("/")}>/</button>
            <button onClick={() => addOp("*")}>*</button>
            <button onClick={() => addOp("-")}>-</button>
            <button onClick={() => addOp("+")}>+</button>

            <button onClick={delNumb}>DEL</button>
          </div>
          <div className="operation">
            {numbers()}
            <button className="zero" onClick={() => addOp("0")}>
              0
            </button>
            <button onClick={() => addOp(".")}>.</button>

            <button className="enterOp" onClick={enterOp}>
              Enter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
