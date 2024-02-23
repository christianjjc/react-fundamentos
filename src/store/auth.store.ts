import { create } from "zustand";

interface AuthState {
  status: "authenticated" | "unauthenticated" | "checking";
  token?: string;
  user?: {
    name: string;
    email: string;
  };

  //methods
  logIn: (email: string, password: string) => void;
  logOut: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  status: "checking",
  token: undefined,
  user: undefined,
  logIn: (email: string, password: string) => {
    set({
      status: "authenticated",
      token: "ABC123",
      user: {
        name: "John Doe",
        email: email,
      },
    });
  },
  logOut: () => {
    set({
      status: "unauthenticated",
      token: "",
      user: {
        name: "",
        email: "",
      },
    });
  },
}));
