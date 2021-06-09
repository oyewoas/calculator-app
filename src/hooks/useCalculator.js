import { useState } from "react";


const useCalculator = () => {
    /* eslint no-eval: 0 */
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    
    const handleClear =() => {
        setInput(input.substr(0, input.length - 1))
    }

    const handleReset = () => {
        setInput("")
    }

    const handleOperations = (e) => {
        setInput(input + e.target.value)
    }

    const handleAns = () => {
      if(result.length){
        setInput(result)
      }
    }

    const handleCalculateResult = async () => {
        try {
          const res =  String(eval(input)).length > 4 &&
          String(eval(input)).includes(".")
          ? String(eval(input).toFixed(4))
          : String(eval(input))
          setResult(res);
        } catch (e) {
          console.log(e);
        }
      }
    return {
        result,
        setInput,
        input,
        handleOperations,
        handleClear,
        handleReset,
        handleCalculateResult,
        handleAns,
        setResult
    }
}

export default useCalculator