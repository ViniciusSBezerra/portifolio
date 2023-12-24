import { OpenMenu } from "./open-menu";
import { Logo } from "../../../../assets/Logo";

import "./index.css";
import { MenuHamburguerIcon } from "../../../../assets/MenuHamburguerIcon";
import { Context, useGlobalContext } from "../../../../context";

export const MobileHeader = () => {
  const { isOpen, setIsOpen } = useGlobalContext() as Context;

  return (
    <div className="mobile__header-container">
      <a href="/">
        <div className="mobile__header-logo">
          <Logo />
          <p className="mobile__header-logo-text">Vinicius Souza</p>
        </div>
      </a>
      <button
        aria-label="menu hamburguer"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <MenuHamburguerIcon />
      </button>
      {isOpen ? <OpenMenu /> : ""}
    </div>
  );
};
