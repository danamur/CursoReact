import { useState } from "react";

export const CounterApp = () => {
  /** Estado inicial usando useState */
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  /** Desestructuración del estado para acceder a las propiedades individualmente */
  const { counter1, counter2, counter3 } = state;

  /** Actualización del estado usando setCounter
   * Se realiza una reestructuración del objeto state para modificar solo el parámetro deseado
   */
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center text-light">CounterApp</h1>
          <h2 className="text-center text-light">{counter1}</h2>
          <h2 className="text-center text-light">{counter2}</h2>
          <h2 className="text-center text-light">{counter3}</h2>
          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-danger mx-2"
              onClick={() => setCounter({ ...state, counter1: counter1 - 1 })}
            >
              Decrementar
            </button>
            <button
              className="btn btn-warning mx-2"
              onClick={() => setCounter({ ...state, counter1: 0 })}
            >
              Reset
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => setCounter({ ...state, counter1: counter1 + 1 })}
            >
              Incrementar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
