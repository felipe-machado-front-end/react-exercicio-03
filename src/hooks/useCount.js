import React from "react";
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
      break;
    case "DEL":
      return { ...state, count: state.count - 1 };
      break;
    case "RESET":
      return initialState;
      break;
  }
  return state;
};

export const useCount = () => {
  return React.useReducer(reducer, initialState);
};
