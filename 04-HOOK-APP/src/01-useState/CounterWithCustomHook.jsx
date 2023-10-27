import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="row">
        <div className="col text-center">
          <h1 className="text-light">Counter with Hook: { counter }</h1>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-danger mx-2" onClick={ () => decrement(2) }>Decrementar</button>
            <button className="btn btn-warning mx-2" onClick={ () => reset() }>Reset</button>
            <button className="btn btn-primary mx-2" onClick={ () => increment(2) }>Incrementar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
