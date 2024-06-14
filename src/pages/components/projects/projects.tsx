import { CardProjects } from "./CardProjects";


import { Title } from "../generic/title";


export const Projects = () => {


  return (
    <section id="projects" className=" max-w-[1440px] text-center mt-6  md:mt-12">
      <Title title="Projetos que participei" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mt-6 text-left">
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

        <CardProjects name="ArcelorMittal"
          description="A ArcelorMittal é uma líder global em siderurgia e mineração, com operações em mais de 60 países. Oferece produtos como chapas, bobinas e barras de aço, focando em tecnologia e práticas sustentáveis. Seus produtos são vendidos principalmente através de canais corporativos e industriais."
          technologies={["Javascript", "Reactjs", "Vtex IO"]} />
        <CardProjects
          name="Manole"
          description="A Manole é uma conhecida livraria e editora especializada no segmento da saúde no Brasil. A empresa é destaque no mercado por fornecer materiais didáticos, livros especializados, e-books, e outros recursos educativos focados em diversas áreas da saúde, como medicina, enfermagem, odontologia, farmácia, e saúde pública, entre outras."
          technologies={["Javascript", "Reactjs", "Vtex IO"]} />

        <CardProjects
          name="bbbaterias"
          description="
         A loja BB Baterias é especializada em baterias para notebooks, fontes, telas e outros acessórios relacionados a equipamentos portáteis. Eles oferecem uma ampla variedade de baterias compatíveis com marcas como Acer, Asus, Apple, Dell, HP, Lenovo, Positivo, Samsung e Sony Vaio. A empresa destaca-se pela qualidade de seus produtos, que atendem ou excedem as especificações técnicas originais, além de oferecer uma garantia de 14 meses. Além disso, a BB Baterias conta com atendimento especializado e várias opções de pagamento e entrega rápida"
          technologies={["Javascript", "Reactjs", "Vtex IO"]}
        />

      </div>
    </section>
  );
};
