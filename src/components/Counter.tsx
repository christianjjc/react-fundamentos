import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(10);

  function increaseBy(value: number) {
    setCounter(counter + value);
  }
  function decreaseBy(value: number) {
    setCounter(counter - value);
  }

  return (
    <>
      <h3>Contador: {counter}</h3>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => decreaseBy(1)}>+1</button>
    </>
  );
};
