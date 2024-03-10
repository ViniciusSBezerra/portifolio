
import { useGlobalContext, Context } from "../../../context";
import "./index.css";

export const AboutMe = () => {

  const { theme } = useGlobalContext() as Context
  return (
    <div className="container__aboutMe">
      <h2 className={!theme ? "title" : "title dark-theme"}>Sobre mim</h2>
      <p className={!theme ? "aboutMe" : "aboutMe dark-theme"}>
        Olá, sou Vinicius Souza, um desenvolvedor web de 23 anos, atualmente
        empregado na QualityDigital, onde tenho a emocionante oportunidade de
        contribuir para projetos de destaque, incluindo Electrolux, Multilaser,
        Sauer e Obramax. Essas empresas líderes são parte integrante do nosso
        portfólio de projetos na QualityDigital, onde aplico minhas habilidades
        e conhecimentos no aprimoramento da experiência do usuário e no
        desenvolvimento de soluções inovadoras.
      </p>
    </div>
  );
};
