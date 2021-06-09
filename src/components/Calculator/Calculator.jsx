import React from "react";
import useCalculatorHook from "../../hooks/useCalculator";
import "./Calculator.css";

const Calculator = () => {
  const {
    result,
    handleCalculateResult,
    input,
    handleReset,
    handleClear,
    handleOperations,
    handleAns,
  } = useCalculatorHook();

  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
    calcBtns.push(
      <button onClick={handleOperations} value={item} key={item}>
        {item}
      </button>
    );
  });

  return (
    <div className="calculator-wrapper">
      <div className="show-input">
        {input.length && input !== "undefined" ? input : 0}
        <div className="show-total">{result.length && result !== "undefined" ? result : ""}</div>
      </div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        {/* clear button */}
        <button onClick={() => handleClear()}>C</button>
        {/* clear all */}
        <button onClick={() => handleReset()} value="">
          AC
        </button>
        <button onClick={() => handleAns()}>
          ANS
        </button>
      </div>
      <div className="operations subgrid">
        {/* add button */}
        <button onClick={handleOperations} value="+">
          +
        </button>

        {/* minus button */}
        <button onClick={handleOperations} value="-">
          -
        </button>
        {/* multiplication button */}
        <button onClick={handleOperations} value="*">
          *
        </button>
        {/* division button */}
        <button onClick={handleOperations} value="/">
          /
        </button>
        {/* "=" button */}
        <button onClick={handleCalculateResult} value="=">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
