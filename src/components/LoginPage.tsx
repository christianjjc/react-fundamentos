import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);

  const logIn = useAuthStore((state) => state.logIn);
  const logOut = useAuthStore((state) => state.logOut);

  useEffect(() => {
    setTimeout(() => {
      logOut();
    }, 3000);
  }, []);

  if (authStatus === "checking") {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h3>LoginPage</h3>
      {authStatus === "authenticated" ? (
        <div>Auenticado como: {JSON.stringify(user, null, 2)}</div>
      ) : (
        <div>No autenticado</div>
      )}

      {authStatus === "authenticated" ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <button onClick={() => logIn("cjjc@gmail.com", "123")}>Login</button>
      )}
    </>
  );
};
