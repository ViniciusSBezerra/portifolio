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

        <h1>vinicius tech</h1>

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
            <a href="/project/electrolux">
              <ElectroluxIcon />
            </a>
          </div>

          <div className="image-project">
            <a href="/project/multilaser">
              <MultilaserIcon />
            </a>
          </div>

          <div className="image-project">
            <a href="/project/sauer">
              <SauerIcon />
            </a>
          </div>

          <div className="image-project">
            <a href="/project/obramax">
              <ObramaxIcon />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
