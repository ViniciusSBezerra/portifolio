import { createContext, useContext, useState } from "react";

interface Context {
  isOpen?: boolean;
  setIsOpen: boolean;
  toogleMenu?: () => void;
}
// Crie um contexto
const GlobalContext = createContext<Context>({});

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toogleMenu = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <GlobalContext.Provider value={{ toogleMenu, isOpen, setIsOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};
