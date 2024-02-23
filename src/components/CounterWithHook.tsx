import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const { counter, increaseBy } = useCounter({
    initialValue: 5,
  });

  return (
    <>
      <h3>Contador: {counter}</h3>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(-1)}>-1</button>
    </>
  );
};
