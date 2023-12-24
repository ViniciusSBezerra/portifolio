import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface Context {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  toogleMenu?: () => void;
}
// Crie um contexto
const GlobalContext: any = createContext<Context>({
  isOpen: false,
  setIsOpen: () => {},
});

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
