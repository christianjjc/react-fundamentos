import { useState } from "react";

interface Options {
  initialValue: number;
}

export const useCounter = ({ initialValue = 0 }: Options) => {
  const [counter, setCounter] = useState<number>(initialValue);

  function increaseBy(value: number) {
    const newValue = counter + value;
    if (newValue < 0) return;
    setCounter(counter + value);
  }

  return {
    //* Properties
    counter,
    //* Methods
    increaseBy,
  };
};
