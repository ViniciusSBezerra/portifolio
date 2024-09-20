import { OpenMenu } from "./open-menu";
import { Logo } from "../../../../assets/Logo";

import { MenuHamburguerIcon } from "../../../../assets/MenuHamburguerIcon";
import { Context, useGlobalContext } from "../../../../context";

import { Switch } from "../../switch/Switch";

export const MobileHeader = () => {
  const { isOpen, setIsOpen, theme } = useGlobalContext() as Context;

  return (
    <div className="h-24 flex justify-between items-center shadow-lg px-4 ">
      <a href="/">
        <div className="flex items-center gap-3">
          <Logo />
          <p
            className={
              !theme
                ? "text-2xl text-[--primary-color] font-bold"
                : "text-2xl text-[--primary-color] font-bold dark-theme"
            }
          >
            Vinicius Tech
          </p>
        </div>
      </a>

      <div className="flex items-center gap-3">
        <Switch />
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
