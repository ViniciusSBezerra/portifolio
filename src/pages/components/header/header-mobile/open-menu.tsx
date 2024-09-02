import { CloseMenuIcon } from "../../../../assets/CloseMenuIcon";
import { Context, useGlobalContext } from "../../../../context";
import { OptionMenu } from "../OptionMenu";


export const OpenMenu = () => {
  const { setIsOpen, theme } = useGlobalContext() as Context;
  return (
    <div className={`${!theme ? "w-full h-full z-50 fixed right-0 top-0 bg-white" : "w-full h-full z-50 fixed right-0 top-0 bg-dark"}`}>
      <ul>

        <OptionMenu closeMenu={false}
          name="Projetos" href="#projects" />

        <OptionMenu closeMenu={false} name="Tecnologias" href="#tecnologias"></OptionMenu>

      </ul>

      <button
        className="w-[40px] h-[40px] absolute top-8 right-4 "
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <CloseMenuIcon />
      </button>
    </div>
  );
};
