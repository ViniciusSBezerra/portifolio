import "./styles.css";

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
  return (
    <div className="project__card">
      <p className="project__name">{name}</p>
      <p className="project__technologies">
        {technologies?.map((technologie) => (
          <span className="project__technologies__item">{technologie}</span>
        ))}
      </p>
      <p className="project__description">{description}</p>
    </div>
  );
};
