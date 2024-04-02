
import { useGlobalContext, Context } from "../../../context";
import { Title } from "../generic/title";
import "./index.css";

export const AboutMe = () => {

  const { theme } = useGlobalContext() as Context
  return (
    <section className="max-w-[1440px] w-full my-0 mx-auto text-center ">
      <Title title="Sobre mim" />
      <p className={`text-lg text-[--primary-color] text-center mt-6 ${!theme ? "" : "dark-theme"}`}>
        Olá! Sou Vinicius Souza, um desenvolvedor web especializado em projetos de destaque para marcas líderes como Electrolux, Multilaser, Livedros, Osklen, Sauer e Obramax. Com minhas habilidades e conhecimentos, aprimoro a experiência do usuário e crio soluções inovadoras. Se você procura excelência no desenvolvimento web, estou aqui para levar seu projeto ao próximo nível. Entre em contato e vamos fazer acontecer!
      </p>
    </section>
  );
};
