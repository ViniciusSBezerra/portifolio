import { OpenMenu } from "./open-menu";
import { Logo } from "../../../../assets/Logo";

import "./index.css";
import { MenuHamburguerIcon } from "../../../../assets/MenuHamburguerIcon";
import { useGlobalContext } from "../../../../context";

export const MobileHeader = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return (
    <div className="mobile__header-container">
      <div className="mobile__header-logo">
        <Logo />
        <p className="mobile__header-logo-text">Vinicius Souza</p>
      </div>
      <button
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
