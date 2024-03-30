
import { HomeIcon } from "../../assets/HomeIcon";

import { Technologies } from "../components/technologies";

import "../home/index.css";
import { AboutMe } from "../components/about-me";
import { Projects } from "../components/projects/projects";
import { SocialMedia } from "../components/social-media";
import { useGlobalContext, Context } from "../../context";

export const Homepage = () => {
  const { theme } = useGlobalContext() as Context
  return (
    <div className="container__homepage">
      <section className="content__homepage">
        <div className={!theme ? "text" : "text dark-theme"}>
          <div className="content__homepage-text-section">
            <p className={!theme ? "content__homepage-text" : "content__homepage-text dark-theme"}>Ola pessoal</p>
            <h1 className={!theme ? "content__homepage-text-title" : "content__homepage-text-title dark-theme"} >
              Sou Desenvolvedor web
            </h1>
            <p className={!theme ? "content__homepage-text" : "content__homepage-text dark-theme"}>
              Seja bem-vindo ao meu portifolio/website
            </p>
          </div>

          <div className="container__button">
            <p className={!theme ? "content__homepage-ancor" : "content__homepage-ancor dark-theme"} >
              Um pouco mais sobre mim
            </p>
          </div>

          <SocialMedia />
        </div>

        <section className="homeicon">
          <HomeIcon />
        </section>
      </section>

      <AboutMe />

      <Technologies />

      <Projects />
    </div>
  );
};
