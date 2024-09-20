import { useGlobalContext, Context } from "../../../context";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  const { theme } = useGlobalContext() as Context;
  return (
    <p
      className={`text-3xl font-bold   ${!theme ? "text-[--primary-color]" : "dark-theme"}`}
    >
      {title}
    </p>
  );
};
