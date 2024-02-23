import React from "react";

export const BasicFunctions = () => {
  const increaseBy = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de suma: {increaseBy(2, 2)}</span>
    </>
  );
};
