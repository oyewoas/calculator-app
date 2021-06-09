import { renderHook, act } from "@testing-library/react-hooks";
import useCalculator from "./useCalculator";

test("should use calculator", () => {
  const { result } = renderHook(() => useCalculator());
  expect(result.current.input).toBe("");
  expect(result.current.result).toBe("");
  expect(typeof result.current.handleReset).toBe("function");
  expect(typeof result.current.handleClear).toBe("function");
  expect(typeof result.current.handleCalculateResult).toBe("function");
  expect(typeof result.current.handleOperations).toBe("function");
  expect(typeof result.current.handleAns).toBe("function");
});

test("should reset input", () => {
  const { result } = renderHook(() => useCalculator());

  act(() => {
    result.current.handleReset();
  });

  expect(result.current.input).toBe("");
});

test("should clear input", () => {
  const { result } = renderHook(() => useCalculator());

  act(() => {
    result.current.handleClear();
  });

  expect(result.current.input).toBe("");
});

test("should handle operations", () => {
  const { result } = renderHook(() => useCalculator());
  const e = {
    target: {
      value: "4",
    },
  };
  act(() => {
    result.current.handleOperations(e);
  });

  expect(result.current.input).toBe("4");
});

test("should calculate results", () => {
  const { result } = renderHook(() => useCalculator());
  const digitOne = {
    target: {
      value: "4",
    },
  };

  const operationOne = {
    target: {
      value: "+",
    },
  };

  const digitTwo = {
    target: {
      value: "5",
    },
  };
  act(() => {
    result.current.handleOperations(digitOne);
  });
  act(() => {
    result.current.handleOperations(operationOne);
  });
  act(() => {
    result.current.handleOperations(digitTwo);
  });

  act(() => {
    result.current.handleCalculateResult();
  });

  expect(result.current.input).toBe("4+5");
  expect(result.current.result).toBe("9");
});


test("should calculate decimal results to 4 decimal places", () => {
    const { result } = renderHook(() => useCalculator());
    const digitOne = {
      target: {
        value: "4",
      },
    };
  
    const operationOne = {
      target: {
        value: "+",
      },
    };
  
    const digitTwo = {
      target: {
        value: "5.8",
      },
    };
    act(() => {
      result.current.handleOperations(digitOne);
    });
    act(() => {
      result.current.handleOperations(operationOne);
    });
    act(() => {
      result.current.handleOperations(digitTwo);
    });
  
    act(() => {
      result.current.handleCalculateResult();
    });
  
    expect(result.current.input).toBe("4+5.8");
    expect(result.current.result).toBe("9.8");
  });

  test("should make input equal latest results when ans is clicked", () => {
    const { result } = renderHook(() => useCalculator());
    const digitOne = {
      target: {
        value: "4",
      },
    };
  
    const operationOne = {
      target: {
        value: "+",
      },
    };
  
    const digitTwo = {
      target: {
        value: "5",
      },
    };
    act(() => {
      result.current.handleOperations(digitOne);
    });
    act(() => {
      result.current.handleOperations(operationOne);
    });
    act(() => {
      result.current.handleOperations(digitTwo);
    });
  
    act(() => {
      result.current.handleCalculateResult();
    });
    act(() => {
        result.current.handleAns();
    });
    expect(result.current.input).toBe("9");
    expect(result.current.result).toBe("9");
  });
  