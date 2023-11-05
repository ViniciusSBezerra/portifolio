import { CloseMenuIcon } from "../../../../assets/CloseMenuIcon";
import { Context, useGlobalContext } from "../../../../context";
import "../index.css";

export const OpenMenu = () => {
  const { setIsOpen } = useGlobalContext() as Context;
  return (
    <div className="menu-open">
      <ul>
        <li className="menu-item">Home</li>
        <li className="menu-item">Sobre</li>
        <li className="menu-item">Projetos</li>
        <li className="menu-item">Tecnologias</li>
        <li className="menu-item">Contato</li>
      </ul>

      <button
        className="container-icon"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <CloseMenuIcon />
      </button>
    </div>
  );
};
