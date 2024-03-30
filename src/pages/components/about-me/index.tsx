
import { useGlobalContext, Context } from "../../../context";
import "./index.css";

export const AboutMe = () => {

  const { theme } = useGlobalContext() as Context
  return (
    <section className="container__aboutMe">
      <h2 className={!theme ? "title" : "title dark-theme"}>Sobre mim</h2>
      <p className={!theme ? "aboutMe" : "aboutMe dark-theme"}>
        Olá! Sou Vinicius Souza, um desenvolvedor web especializado em projetos de destaque para marcas líderes como Electrolux, Multilaser, Livedros, Osklen, Sauer e Obramax. Com minhas habilidades e conhecimentos, aprimoro a experiência do usuário e crio soluções inovadoras. Se você procura excelência no desenvolvimento web, estou aqui para levar seu projeto ao próximo nível. Entre em contato e vamos fazer acontecer!
      </p>
    </section>
  );
};
