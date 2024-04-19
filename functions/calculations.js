// calculator function
export default function calculations(type, value, state) {
  if (type === "number") return handleNumber(value, state);
  if (type === "clear") return initialState;
  return state;
}

export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

const handleNumber = (value, state) => {
  if (state.currentValue !== "0") {
    return {
      currentValue: `${state.currentValue}${value}`,
    };
  } else return { currentValue: `${value}` };
};
