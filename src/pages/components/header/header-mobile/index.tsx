import { OpenMenu } from "./open-menu";
import { Logo } from "../../../../assets/Logo";


import { MenuHamburguerIcon } from "../../../../assets/MenuHamburguerIcon";
import { Context, useGlobalContext } from "../../../../context";
import { MaterialUISwitch } from "../../switch/Switch";

export const MobileHeader = () => {
  const { isOpen, setIsOpen, handleTheme, theme } = useGlobalContext() as Context;

  return (
    <div className="h-[70px] flex justify-between items-center ">
      <a href="/">
        <div className="flex items-center gap-3">
          <Logo />
          <p className={!theme ? "text-2xl text-[--primary-color] font-bold" : "text-2xl text-[--primary-color] font-bold dark-theme"}>Vinicius Tech</p>
        </div>
      </a>

      <div className="flex items-center">

        <MaterialUISwitch aria-label="switch" onClick={() => handleTheme && handleTheme()} />

        <button
          aria-label="menu hamburguer"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <MenuHamburguerIcon />
        </button>


      </div>
      {isOpen ? <OpenMenu /> : ""}
    </div>
  );
};
