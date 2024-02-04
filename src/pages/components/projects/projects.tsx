import { CardProjects } from "./CardProjects";
import "./styles.css";
import { Context, useGlobalContext } from "../../../context";
export const Projects = () => {
  const { theme } = useGlobalContext() as Context;

  return (
    <div id="projects">
      <h1 className={!theme ? "title" : "title dark-theme"}>Projetos que participei</h1>

      <div className="projects">
        <CardProjects
          name="Electrolux"
          technologies={["Javascript", "Reactjs", "Vtexio", "graphql"]}
          description="
      A Electrolux é uma renomada loja de eletrodomésticos, oferecendo inovação, qualidade e design elegante em produtos que abrangem cozinha, cuidados com a roupa e limpeza, proporcionando soluções eficientes para a vida doméstica moderna."
        />
        <CardProjects
          name="Multilaser"
          technologies={["Javascript", "Reactjs", "Vtexio"]}
          description="A Multilaser é uma destacada loja de eletrônicos, oferecendo uma ampla gama de produtos inovadores, desde acessórios de informática até dispositivos de áudio e gadgets tecnológicos, proporcionando soluções versáteis para as necessidades digitais dos consumidores."
        />
        <CardProjects
          name="Obramax"
          technologies={["Javascript", "Reactjs", "Vtexio", "graphql"]}
          description="
      A Obramax é uma loja de construção e materiais para casa, fornecendo uma extensa variedade de produtos para projetos residenciais e comerciais, desde materiais de construção até ferramentas e decoração, tornando-se um destino completo para as necessidades de quem busca soluções para reformas e construções."
        />
        <CardProjects
          name="Sauer"
          technologies={["Javascript", "Reactjs", "Vtexio"]}
          description="A Sauer Joalheria é a personificação do luxo e excelência em joias. Reconhecida globalmente, suas peças exclusivas combinam design elegante e artesanato meticuloso, refletindo tradição e inovação. Comprometida com a qualidade inigualável, a Sauer oferece uma experiência de compra sofisticada, onde a exclusividade e a beleza atemporal definem um padrão de luxo."
        />
      </div>
    </div>
  );
};
