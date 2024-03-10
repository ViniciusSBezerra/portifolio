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
          technologies={["Javascript", "Reactjs", "Vtex IO", "graphql"]}
          description="
      A Electrolux é uma renomada loja de eletrodomésticos, oferecendo inovação, qualidade e design elegante em produtos que abrangem cozinha, cuidados com a roupa e limpeza, proporcionando soluções eficientes para a vida doméstica moderna."
        />
        <CardProjects
          name="Multilaser"
          technologies={["Javascript", "Reactjs", "Vtex IO"]}
          description="A Multilaser é uma destacada loja de eletrônicos, oferecendo uma ampla gama de produtos inovadores, desde acessórios de informática até dispositivos de áudio e gadgets tecnológicos, proporcionando soluções versáteis para as necessidades digitais dos consumidores."
        />
        <CardProjects
          name="Obramax"
          technologies={["Javascript", "Reactjs", "Vtex IO", "graphql"]}
          description="
      A Obramax é uma loja de construção e materiais para casa, fornecendo uma extensa variedade de produtos para projetos residenciais e comerciais, desde materiais de construção até ferramentas e decoração, tornando-se um destino completo para as necessidades de quem busca soluções para reformas e construções."
        />
        <CardProjects
          name="Sauer"
          technologies={["Javascript", "Reactjs", "Vtex IO"]}
          description="A Sauer Joalheria é a personificação do luxo e excelência em joias. Reconhecida globalmente, suas peças exclusivas combinam design elegante e artesanato meticuloso, refletindo tradição e inovação. Comprometida com a qualidade inigualável, a Sauer oferece uma experiência de compra sofisticada, onde a exclusividade e a beleza atemporal definem um padrão de luxo."
        />

        <CardProjects
          name="Livedrops"
          technologies={["Javascript", "Reactjs", "Vtex IO", "handlebars"]}
          description="Explore um mundo de aromas e sensações em nossa loja de essências. De fragrâncias florais a notas amadeiradas, cada frasco captura a essência única de momentos especiais. Nossa equipe especializada está pronta para guiá-lo em sua jornada sensorial, ajudando a encontrar o perfume perfeito para expressar sua personalidade e estilo de vida. Venha nos visitar e descubra o toque final ideal para cada ocasião."
        />

        <CardProjects
          name="Osklen"
          technologies={["Javascript", "Deno", "Preact", "Vtex IO", "Deco"]}
          description="A Osklen é uma renomada marca brasileira de moda, fundada em 1986 por Oskar Metsavaht. Reconhecida por sua abordagem sustentável e inspiração na natureza e na vida urbana do Rio de Janeiro, a marca oferece uma ampla gama de roupas, calçados e acessórios para homens e mulheres. Com presença internacional, a Osklen conquistou destaque pela sua combinação única de estilo contemporâneo e compromisso com a responsabilidade ambiental."
        />
      </div>
    </div>
  );
};
