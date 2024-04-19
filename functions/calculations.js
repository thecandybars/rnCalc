// calculator functions
export default function calculations(type, value, state) {
  if (type === "number") return handleNumber(value, state);
  if (type === "equal") return handleEqual(state);
  if (type === "point") return handleDecimalPoint(state);
  if (type === "clear") return initialState;
  if (type === "posneg")
    return { ...state, currentValue: `${parseFloat(state.currentValue) * -1}` };
  if (type === "percent")
    return {
      ...state,
      currentValue: `${parseFloat(state.currentValue) * 0.01}`,
    };
  if (type === "operator")
    return {
      operator: value,
      previousValue: state.currentValue,
      currentValue: "0",
    };
  return state;
}

export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

const handleEqual = (state) => {
  const { currentValue, previousValue, operator } = state;
  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = { operator: null, previousValue: null };

  switch (operator) {
    case "+":
      return {
        currentValue: `${previous + current}`,
        ...resetState,
      };
    case "-":
      return {
        currentValue: `${previous - current}`,
        ...resetState,
      };
    case "*":
      return {
        currentValue: `${previous * current}`,
        ...resetState,
      };
    case "/":
      return {
        currentValue: `${previous / current}`,
        ...resetState,
      };

    default:
      return state;
  }
};

const handleNumber = (value, state) => {
  if (state.currentValue !== "0") {
    return { ...state, currentValue: `${state.currentValue}${value}` };
  }

  return { ...state, currentValue: `${value}` };
};
const handleDecimalPoint = (state) => {
  if (state.currentValue.indexOf(".") === -1) {
    return { ...state, currentValue: `${state.currentValue}.` };
  }

  return { ...state, currentValue: `${state.currentValue}` };
};
