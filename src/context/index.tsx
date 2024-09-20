import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Context {
  isOpen?: boolean;
  theme?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<boolean>>;
  toogleMenu?: () => void;
  handleTheme?: () => void;
}
// Crie um contexto
const GlobalContext: any = createContext<Context>({
  isOpen: false,
  theme: false,
  setIsOpen: () => {},
  setTheme: () => {},
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

  useEffect(() => {
    const localstoragetheme = localStorage.getItem("theme");
    if (localstoragetheme) {
      setTheme(localstoragetheme === "dark-theme");
    }
  }, []);

  const handleTheme = () => {
    const newTheme = !theme;
    localStorage.setItem("theme", newTheme ? "dark-theme" : "light-theme");
    setTheme(newTheme);
  };

  return (
    <GlobalContext.Provider
      value={{ toogleMenu, isOpen, setIsOpen, theme, setTheme, handleTheme }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
