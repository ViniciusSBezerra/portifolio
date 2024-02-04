import "./styles.css";
import { Context, useGlobalContext } from "../../../context";

interface CardProjectsProps {
  name: string;
  technologies?: string[];
  description: string;
}

export const CardProjects = ({
  name,
  description,
  technologies,
}: CardProjectsProps) => {

  const { theme } = useGlobalContext() as Context;
  return (
    <div className={!theme ? "project__card" : "project__card card-dark-theme"}>
      <p className={!theme ? "project__name" : "project__name dark-theme"}>{name}</p>
      <p className="project__technologies">
        {technologies?.map((technologie) => (
          <span className="project__technologies__item">{technologie}</span>
        ))}
      </p>
      <p className={!theme ? "project__description" : "project__description dark-theme"}>{description}</p>
    </div>
  );
};
