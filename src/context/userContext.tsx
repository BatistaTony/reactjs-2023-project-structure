import { createContext, useState } from "react";
import { User } from "../typescript/user";

interface UserContext {
  updateUser: (data: User) => void;
  user: User;
}

interface UserContextProviderProps {
  children: React.ReactNode;
}

const CONTEXT_INITIAL_VALUE: UserContext = {
  updateUser: () => null,
  user: {
    email: "",
    name: "",
  },
};

export const userContext = createContext<UserContext>(CONTEXT_INITIAL_VALUE);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User>(CONTEXT_INITIAL_VALUE.user);

  const updateUser = (data: User) => {
    setUser(data);
  };

  return (
    <userContext.Provider value={{ user, updateUser }}>
      {children}
    </userContext.Provider>
  );
};
