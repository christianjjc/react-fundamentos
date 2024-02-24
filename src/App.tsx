import { Counter, LoginPage, UsersPage } from "./components";
import { BasicFunctions, BasicTypes, ObjectLiterals } from "./typescript";

function App() {
  return (
    <main>
      <h1>Introducción a TS React</h1>
      <BasicTypes />
      <ObjectLiterals />
      <BasicFunctions />
      <Counter />
      <LoginPage />
      <UsersPage />
    </main>
  );
}

export default App;
