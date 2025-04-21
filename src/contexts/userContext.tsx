import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface UserContextType {
  username: string;
  setUsername: (name: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [username, setUsernameState] = useState("");

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");

    savedUsername && setUsernameState(savedUsername);
  }, [])

  function setUsername(name: string) {
    setUsernameState(name);
    localStorage.setItem("username", name)
  }

  function logout() {
    setUsernameState("")
    localStorage.removeItem("username")
  }

  return (
    <UserContext.Provider value={{ username, setUsername, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
