import React from "react";
import { useCount } from "./hooks/useCount";

function App() {
  const [countState, countDispatch] = useCount();

  return (
    <div>
      <h1 className="text-8xl">{countState.count}</h1>
      <button
        className="mt-10 px-4 py-2 bg-green-400 ml-4 rounded-md"
        onClick={() => countDispatch({ type: "ADD" })}
      >
        Adicionar
      </button>
      <button
        className="mt-10 px-4 py-2 bg-green-400 ml-4 rounded-md"
        onClick={() => countDispatch({ type: "DEL" })}
      >
        Deletar
      </button>
      <button
        className="mt-10 px-4 py-2 bg-green-400 ml-4 rounded-md"
        onClick={() => countDispatch({ type: "RESET" })}
      >
        Resetar
      </button>
    </div>
  );
}

export default App;
