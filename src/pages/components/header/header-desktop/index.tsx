import { Logo } from "../../../../assets/Logo";
import "./index.css";
export const HeaderDesktop = () => {
  return (
    <div className="header__desktop-container">
      <div className="mobile__header-logo">
        <Logo />
        <p className="mobile__header-logo-text">Vinicius Souza</p>
      </div>

      <ul className="header__desktop-options">
        <li className="menu-item">Home</li>
        <li className="menu-item">Sobre</li>
        <li className="menu-item">Projetos</li>
        <li className="menu-item">Tecnologias</li>
        <li className="menu-item">Contato</li>
      </ul>
    </div>
  );
};
