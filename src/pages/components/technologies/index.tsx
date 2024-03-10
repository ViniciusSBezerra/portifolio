import { CssIcon } from "../../../assets/CssIcon";
import { HtmlIcon } from "../../../assets/HtmlIcon";
import { JavaScriptIcon } from "../../../assets/JavaScriptIcon";
import { ReactIcon } from "../../../assets/ReactIcon";
import { TypeScriptIcon } from "../../../assets/TypeScriptIcon";
import { VtexIcon } from "../../../assets/VtexIo";
import { Context, useGlobalContext } from "../../../context";

import "./index.css";

export const Technologies = () => {
  const { theme } = useGlobalContext() as Context;
  return (
    <section id="tecnologias" className="technologies">
      <h3 className={!theme ? "title" : "title dark-theme"}>Minhas tecnologias</h3>

      <div className="container__tecnologies">
        <div className="image-tecnologie">
          <JavaScriptIcon />
        </div>

        <div className="image-tecnologie">
          <ReactIcon />
        </div>
        <div className="image-tecnologie">
          <HtmlIcon />
        </div>

        <div className="image-tecnologie">
          <CssIcon />
        </div>
        <div className="image-tecnologie">
          <TypeScriptIcon />
        </div>

        <div className="image-tecnologie">
          <VtexIcon />
        </div>
      </div>
    </section>
  );
};
