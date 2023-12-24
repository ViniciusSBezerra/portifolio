import { GitHubIcon } from "../../assets/GitHubIcon";
import { HomeIcon } from "../../assets/HomeIcon";

import { InstagramIcon } from "../../assets/InstagramIcon";

import { LikedinIcon } from "../../assets/LinkedinIcon";
import { Technologies } from "../components/technologies";

import "../home/index.css";
import { AboutMe } from "../components/about-me";
import { Projects } from "../components/projects/projects";

export const Homepage = () => {
  return (
    <>
      <div className="container__homepage">
        <div className="content__homepage">
          <section className="text">
            <div className="content__homepage-text-section">
              <p className="content__homepage-text">Ola pessoal,</p>
              <h1 className="content__homepage-text-title">
                Sou Desenvolvedor web
              </h1>
              <p className="content__homepage-text">
                Seja bem-vindo ao meu portifolio/website
              </p>
            </div>

            <div className="container__button">
              <a className="content__homepage-ancor" href="#about-me">
                Um pouco mais sobre mim
              </a>
            </div>

            <div className="social__media-links">
              <a target="_blank" aria-label="icone github" href="https://github.com/ViniciusSBezerra">
                <GitHubIcon />
              </a>
              <a
                aria-label="icone linkedin"
                target="_blank"
                href="https://www.linkedin.com/in/viniciussbezerra/"
              >
                <LikedinIcon />
              </a>
              <a target="_blank" aria-label="icone instagram" href="https://www.instagram.com/vinicius_s25/">
                <InstagramIcon />
              </a>
            </div>
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
