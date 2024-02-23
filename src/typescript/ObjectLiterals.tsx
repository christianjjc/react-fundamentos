interface Person {
  fullName: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    fullName: "Fernando",
    age: 37,
    address: {
      country: "Canada",
      houseNo: 615,
    },
  };

  /*  function replacer(key, value) {
    // Filtering out properties
    if (typeof value === "string") {
      return undefined;
    }
    return value;
  } */

  return (
    <>
      <h3>Objetos Literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
