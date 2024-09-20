import { Logo } from "../../../../assets/Logo";
import { useGlobalContext, Context } from "../../../../context";
import { Switch } from "../../switch/Switch";
import { OptionMenu } from "../OptionMenu";

export const HeaderDesktop = () => {
  const { theme } = useGlobalContext() as Context;
  return (
    <div className="w-full h-24 flex items-center shadow-lg">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4">
        <a href="/">
          <div className="flex items-center gap-3">
            <Logo />
            <p
              className={
                !theme
                  ? "text-2xl text-[--primary-color] font-bold"
                  : "text-2xl text-[--primary-color] font-bold dark-theme"
              }
            >
              Vinicius Tech
            </p>
          </div>
        </a>

        <ul className="flex items-center gap-5">
          <li
            className={`flex text-sm font-bold px-4 py-2 mt-4 md: md:-0 md:mt-0 md:font-bold md:text-base ${!theme ? "text-[--primary-color]" : "text-[--dark-theme]"}`}
          >
            <Switch />
          </li>

          <OptionMenu name="Tecnologias" href="#tecnologias"></OptionMenu>
          <OptionMenu name="Projetos" href="#projects"></OptionMenu>
        </ul>
      </div>
    </div>
  );
};
