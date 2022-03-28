import { createContext, useState, Dispatch, SetStateAction } from "react";

export const Context = createContext<Value | null>(null);

interface Props {
  children: JSX.Element;
}

interface User {
  points: number;
}

interface Value {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>({ points: 0});

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export default UserProvider;
