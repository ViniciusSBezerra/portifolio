import { MultilaserIcon } from "../../../assets/technologies/Multilaser";
import { ObramaxIcon } from "../../../assets/technologies/ObramaxIcon";
import { SauerIcon } from "../../../assets/technologies/SauerIcon";
import { ElectroluxIcon } from "../../../assets/technologies/electroluxIcon";

import "./index.css";

export const AboutMe = () => {
  return (
    <div className="container__aboutMe">
      {/* <section className="aboutMe">
        <img src="" alt="minha imagem" />

        <p className="aboutMe__text">
          {" "}
          Olá, sou Vinicius Souza, um desenvolvedor web de 23 anos, atualmente
          empregado na QualityDigital, onde tenho a emocionante oportunidade de
          contribuir para projetos de destaque, incluindo Electrolux,
          Multilaser, Sauer e Obramax. Essas empresas líderes são parte
          integrante do nosso portfólio de projetos na QualityDigital, onde
          aplico minhas habilidades e conhecimentos no aprimoramento da
          experiência do usuário e no desenvolvimento de soluções inovadoras.
        </p>
      </section> */}

      <div>
        <h1 className="title">Projetos</h1>
        <section id="projects" className="aboutMe__projects">
          <div className="image-project">
            <ElectroluxIcon />
          </div>

          <div className="image-project">
            <SauerIcon />
          </div>

          <div className="image-project">
            <ObramaxIcon />
          </div>

          <div className="image-project">
            <MultilaserIcon />
          </div>
        </section>
      </div>
    </div>
  );
};
