import React from "react";

export const BasicTypes = () => {
  const name: string = "Fernando";
  const age: number = 37;
  const isActive: boolean = true;

  const powers: string[] = ["react", "angular"];

  powers.push("123");

  return (
    <>
      <h3>Tipos Básicos</h3>
      {name} {age} {isActive ? "true" : "false"}
      {powers}
    </>
  );
};
