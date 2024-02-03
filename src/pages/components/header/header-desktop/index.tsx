
import { Logo } from "../../../../assets/Logo";
import { useGlobalContext, Context } from "../../../../context";
import { MaterialUISwitch } from "../../switch/Switch";
import "./index.css";

export const HeaderDesktop = () => {

  const { handleTheme } = useGlobalContext() as Context
  return (
    <div className="header__desktop-container">
      <a href="/">
        <div className="mobile__header-logo">
          <Logo />
          <p className="mobile__header-logo-text">Vinicius Souza</p>
        </div>
      </a>

      <ul className="header__desktop-options">

        <MaterialUISwitch onClick={() => handleTheme()} />

        <li className="menu-item">
          {" "}
          <a className="menu-item" href="#tecnologias">
            Tecnologias
          </a>{" "}
        </li>

        <li className="menu-item">
          {" "}
          <a className="menu-item" href="#projects">
            Projetos
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};
