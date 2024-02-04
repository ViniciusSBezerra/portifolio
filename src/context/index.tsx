import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface Context {
  isOpen?: boolean;
  theme?: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<boolean>>;
  toogleMenu?: () => void;
  handleTheme?: () => void;
}
// Crie um contexto
const GlobalContext: any = createContext<Context>({
  isOpen: false,
  theme: false,
  setIsOpen: () => { },
  setTheme: () => { },


});

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<boolean>(false);
  const toogleMenu = () => {
    return setIsOpen(!isOpen);
  };

  const handleTheme = () => {
    return setTheme(!theme);
  };


  return (
    <GlobalContext.Provider value={{ toogleMenu, isOpen, setIsOpen, theme, setTheme, handleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
