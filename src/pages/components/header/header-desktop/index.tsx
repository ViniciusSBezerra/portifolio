import { Logo } from "../../../../assets/Logo";
import "./index.css";
export const HeaderDesktop = () => {
  return (
    <div className="header__desktop-container">
      <a href="/">
        <div className="mobile__header-logo">
          <Logo />
          <p className="mobile__header-logo-text">Vinicius Souza</p>
        </div>
      </a>

      <ul className="header__desktop-options">
        <li className="menu-item">
          <a className="menu-item" href="#projects">
            Projetos
          </a>
        </li>
        <li className="menu-item">
          {" "}
          <a className="menu-item" href="#tecnologias">
            Tecnologias
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};
