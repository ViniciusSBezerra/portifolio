
import { HomeIcon } from "../../assets/HomeIcon";

import { Technologies } from "../components/technologies";

import "../home/index.css";
import { AboutMe } from "../components/about-me";
import { Projects } from "../components/projects/projects";
import { SocialMedia } from "../components/social-media";

export const Homepage = () => {
  return (
    <>
      <div className="container__homepage">
        <div className="content__homepage">
          <section className="text">
            <div className="content__homepage-text-section">
              <p className="content__homepage-text">Ola pessoal</p>
              <h1 className="content__homepage-text-title">
                Sou Desenvolvedor web
              </h1>
              <p className="content__homepage-text">
                Seja bem-vindo ao meu portifolio/website
              </p>
            </div>

            <div className="container__button">
              <p className="content__homepage-ancor" >
                Um pouco mais sobre mim
              </p>
            </div>

            <SocialMedia />
          </section>

          <section className="homeicon">
            <HomeIcon />
          </section>
        </div>

        <AboutMe />

        <Technologies />

        <Projects />
      </div>
    </>
  );
};
