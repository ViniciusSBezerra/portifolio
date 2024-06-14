
import { Context, useGlobalContext } from "../../../context";

interface CardProjectsProps {
  name: string;
  technologies?: string[];
  description: string;
  link?: string
}

export const CardProjects = ({
  name,
  description,
  technologies,
  link
}: CardProjectsProps) => {

  const { theme } = useGlobalContext() as Context;
  return (
    <div className={`relative flex flex-col gap-2 w-full  p-6 rounded-3xl ${!theme ? " bg-[#f0f0f0] " : "card-dark-theme"}`}>
      <p className={`text-base font-bold rounded ${!theme ? "text-[--primary-color]" : "dark-theme"}`}>{name}</p>
      <p className="flex gap-4 my-2 flex-wrap">
        {technologies?.map((technologie) => (
          <span className="w-max text-xs bg-[--secondary-color] p-2 text-white rounded-xl ">{technologie}</span>
        ))}
      </p>
      <p className={` text-xs ${!theme ? "text-[--primary-color]" : "dark-theme"}`}>{description}</p>
      <a className={` ${!theme ? "text-[--primary-color]" : "dark-theme"}  h-auto w-full text-right`} href={link} target="_blank"><span className={` ${!theme ? "border-[--primary-color]" : "border-[--primary-color-dt]"} rounded-lg inline-block p-2 max-w-24 border border-solid`}>Veja o site</span></a>
    </div>
  );
};
