import { CloseMenuIcon } from "../../../../assets/CloseMenuIcon";
import { Context, useGlobalContext } from "../../../../context";
import "../index.css";

export const OpenMenu = () => {
  const { setIsOpen } = useGlobalContext() as Context;
  return (
    <div className="menu-open">
      <ul>
        <li className="menu-item">
          {" "}
          <a onClick={() => {
            setIsOpen(false);
          }} className="menu-item" href="#projects">
            Projetos
          </a>
        </li>
        <li className="menu-item">
          <a onClick={() => {
            setIsOpen(false);
          }} className="menu-item" href="#tecnologias">
            Tecnologias

          </a>
        </li>
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
