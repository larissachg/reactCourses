import React, { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;

  const counterUpdate = () => {
    setCounter((prev) => {
      return {
        counter1: prev.counter1 + 1,
        counter2: prev.counter2 + 1,
        counter3: prev.counter3 + 1,
      };
    });
  };

  return (
    <>
      <h2>Counter: {counter1}</h2>
      <h2>Counter: {counter2}</h2>
      <h2>Counter: {counter3}</h2>

      <hr />
      <button className="btn" onClick={counterUpdate}>
        +1
      </button>
    </>
  );
};
