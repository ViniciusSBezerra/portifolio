
import { HomeIcon } from "../../assets/HomeIcon";

import { Technologies } from "../components/technologies";


import { AboutMe } from "../components/about-me";
import { Projects } from "../components/projects/projects";
import { SocialMedia } from "../components/social-media";
import { useGlobalContext, Context } from "../../context";
import { GoToTop } from "../components/goToTop/GoToTop";

export const Homepage = () => {
  const { theme } = useGlobalContext() as Context
  return (
    <>
      <section className=" max-w-[1440px] flex justify-between flex-col-reverse lg:flex-row lg:p-0 mx-auto ">
        <div className={`lg:flex lg:flex-col lg:justify-center items-start ${theme ? "text dark-theme" : ""}`}>
          <div className="text-center lg:text-left">
            <p className={`text-2xl font-medium ${!theme ? "text-[--primary-color]" : "dark-theme"}`}>Ola pessoal</p>
            <h1 className={`lg:text-6xl text-3xl lg:max-w-[545px] my-6 ${!theme ? "text-[--primary-color]" : " dark-theme"}`} >
              Sou Desenvolvedor web
            </h1>
            <p className={`text-2xl font-medium ${!theme ? "text-[--primary-color]" : "dark-theme"}`}>
              Seja bem-vindo ao meu portifolio/website
            </p>
          </div>

          <div className="max-w-[310px] w-full my-6 mx-auto lg:ml-0">
            <p className={`w-full flex text-xl justify-center items-center  bg-[--secondary-color] p-2 rounded-lg ${!theme ? "text-white" : "dark-theme"}`} >
              Um pouco mais sobre mim
            </p>
          </div>

          <div className="max-w-[240px] mx-auto lg:ml-0">
            <SocialMedia />
          </div>

        </div>

        <section className="flex justify-center">
          <HomeIcon />
        </section>
      </section>

      <AboutMe />

      <Technologies />

      <Projects />


      <GoToTop />
    </>
  )

};
