import { CssIcon } from "../../../assets/CssIcon";
import { HtmlIcon } from "../../../assets/HtmlIcon";
import { JavaScriptIcon } from "../../../assets/JavaScriptIcon";
import { ReactIcon } from "../../../assets/ReactIcon";
import { TypeScriptIcon } from "../../../assets/TypeScriptIcon";
import { VtexIcon } from "../../../assets/VtexIo";

export const Tecnologies = () => {
  return (
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
  );
};
