import { CssIcon } from "../../../assets/CssIcon";
import { HtmlIcon } from "../../../assets/HtmlIcon";
import { JavaScriptIcon } from "../../../assets/JavaScriptIcon";
import { ReactIcon } from "../../../assets/ReactIcon";
import { TypeScriptIcon } from "../../../assets/TypeScriptIcon";
import { VtexIcon } from "../../../assets/VtexIo";

import { Title } from "../generic/title";
import { ContainerImage } from "./ContainerImage";



export const Technologies = () => {

  return (
    <section id="tecnologias" className="text-center mt-6 md:mt-12">
      <Title title="Minhas tecnologias" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mt-6">
        <ContainerImage >
          <JavaScriptIcon />
        </ContainerImage>

        <ContainerImage >
          <ReactIcon />
        </ContainerImage>
        <ContainerImage >
          <HtmlIcon />
        </ContainerImage>

        <ContainerImage >
          <CssIcon />
        </ContainerImage>
        <ContainerImage >
          <TypeScriptIcon />
        </ContainerImage>

        <ContainerImage >
          <VtexIcon />
        </ContainerImage>
      </div>
    </section>
  );
};
