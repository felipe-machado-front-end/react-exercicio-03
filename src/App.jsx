import React from "react";

function App() {
  // 3- DEFINIÇÃO DO REDUCER AONDE A LÓGICA VAI FUNCIONAR
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

  //1- COMEÇA A CONSTRUÇÃO DO REDUCER POR AQUI
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <h1 className="text-8xl">{state.count}</h1>
      <button
        className="mt-10 px-4 py-2 bg-green-400 ml-4 rounded-md"
        onClick={() => dispatch({ type: "ADD" })}
      >
        Adicionar
      </button>
      <button
        className="mt-10 px-4 py-2 bg-green-400 ml-4 rounded-md"
        onClick={() => dispatch({ type: "DEL" })}
      >
        Deletar
      </button>
      <button
        className="mt-10 px-4 py-2 bg-green-400 ml-4 rounded-md"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Resetar
      </button>
    </div>
  );
}

export default App;
