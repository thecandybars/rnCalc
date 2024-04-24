export const initialState = {
  currentValue: 0,
  operator: null,
  previousValue: null,
  display: "0",
};
// calculator functions
export default function calculations(type, value, state) {
  if (type === "clear") return initialState;
  if (type === "number") return handleNumber(value, state);
  if (type === "equal") return handleEqual(state);
  if (type === "point") return handleDecimalPoint(state);
  if (type === "posneg") return handlePosNeg(state);
  if (type === "percent") return handlePercent(state);
  if (type === "operator") return handleOperator(state, value);

  return state;
}

const handlePercent = (state) => {
  const result = `${parseFloat(state.currentValue) * 0.01}`;
  return {
    ...state,
    currentValue: result,
    currentValue: result,
  };
};

const handlePosNeg = (state) => {
  const result = `${parseFloat(state.currentValue) * -1}`;

  return { ...state, currentValue: result, display: result };
};

const handleOperator = (state, value) => {
  if (state.operator === null)
    return {
      operator: value,
      previousValue: state.currentValue,
      currentValue: "0",
      display: state.currentValue,
    };
  else if (state.currentValue === "0") return { ...state, operator: value };
  else {
    const lastCalculation = calculate(state);
    return {
      operator: value,
      previousValue: lastCalculation,
      currentValue: "0",
      display:
        state.currentValue === "0" ? state.currentValue : lastCalculation,
    };
  }
};

const calculate = (state) => {
  const { currentValue, previousValue, operator } = state;
  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  switch (operator) {
    case "+":
      return `${previous + current}`;
    case "-":
      return `${previous - current}`;
    case "*":
      return `${previous * current}`;
    case "/":
      return `${previous / current}`;
    default:
      return current;
  }
};
const handleEqual = (state) => {
  return {
    display: calculate(state),
    currentValue: calculate(state),
    operator: null,
    previousValue: null,
  };
};

const handleNumber = (value, state) => {
  if (state.currentValue !== "0") {
    return {
      ...state,
      currentValue: `${state.currentValue}${value}`,
      display: `${state.currentValue}${value}`,
    };
  }

  return { ...state, currentValue: `${value}`, display: `${value}` };
};
const handleDecimalPoint = (state) => {
  if (state.currentValue.indexOf(".") === -1) {
    return {
      ...state,
      currentValue: `${state.currentValue}.`,
      display: `${state.currentValue}.`,
    };
  }
  return {
    ...state,
    currentValue: `${state.currentValue}`,
    display: `${state.currentValue}`,
  };
};
