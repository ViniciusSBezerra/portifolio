
import { Logo } from "../../../../assets/Logo";
import { useGlobalContext, Context } from "../../../../context";
import { MaterialUISwitch } from "../../switch/Switch";
import "./index.css";

export const HeaderDesktop = () => {

  const { handleTheme, theme } = useGlobalContext() as Context
  return (
    <div className="header__desktop-container">
      <a href="/">
        <div className="mobile__header-logo">
          <Logo />
          <p className={!theme ? "mobile__header-logo-text" : "mobile__header-logo-text dark-theme"}>Vinicius Tech</p>
        </div>
      </a>

      <ul className="header__desktop-options">

        <li className="menu-item">
          <MaterialUISwitch onClick={() => handleTheme && handleTheme()} />
        </li>

        <li className="menu-item">
          {" "}
          <a className={!theme ? "menu-item" : "menu-item dark-theme"} href="#tecnologias">
            Tecnologias
          </a>{" "}
        </li>

        <li className="menu-item">
          {" "}
          <a className={!theme ? "menu-item" : "menu-item dark-theme"} href="#projects">
            Projetos
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};
