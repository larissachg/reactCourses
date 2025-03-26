import { useState } from "react";

export const useCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    if(counter >= 1){
        setCounter(counter - 1);
    }
  }

  const reset = () => {
    setCounter(initialValue);
  }

  return {
    counter,
     increment,
     decrement,
     reset,
  };

  //PARA QUE SUME Y RESTE DE A DOS EN DOS: 
  /* const increment2 = (value = 1) => {
    console.log(value);
    setCounter(counter + value);
  }

  const decrement2 = ( value = 1) => {
    if(counter >= 1){
        setCounter(counter - value);
    }
  }

  const reset2 = () => {
    setCounter(initialValue);
  }

  return {
    counter,
     increment2,
     decrement2,
     reset2
  }; */

};
