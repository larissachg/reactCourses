import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook: { counter } </h1>
      <hr />
      <button className="btn btn-primary" onClick={increment}> +1 </button>
      <button className="btn btn-primary" onClick={reset}> Reset </button>
      <button className="btn btn-primary" onClick={decrement}> -1 </button>
    </>
  );

  //PARA QUE SUME Y RESTE DE A DOS EN DOS:
  /* const { counter, increment2, decrement2, reset2 } = useCounter();
  return (
    <>
      <h1>Counter with Hook: { counter } </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment2(2)}> +2 </button>
      <button className="btn btn-primary" onClick={reset2}> Reset </button>
      <button className="btn btn-primary" onClick={() => decrement2(2)}> -2 </button>
    </>
  );*/
};
