import { CloseMenuIcon } from "../../../../assets/CloseMenuIcon";
import { Context, useGlobalContext } from "../../../../context";
import "../index.css";

export const OpenMenu = () => {
  const { setIsOpen, theme } = useGlobalContext() as Context;
  return (
    <div className={!theme ? "menu-open" : "menu-open bg-dark"}>
      <ul>
        <li className="menu-item">
          {" "}
          <a onClick={() => {
            setIsOpen(false);
          }} className={!theme ? "menu-item" : "menu-item dark-theme"} href="#projects">
            Projetos
          </a>
        </li>
        <li className="menu-item">
          <a onClick={() => {
            setIsOpen(false);
          }} className={!theme ? "menu-item" : "menu-item dark-theme"} href="#tecnologias">
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
