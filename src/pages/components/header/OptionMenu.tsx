import { useGlobalContext, Context } from "../../../context";

interface OptionMenuProps {
  href?: string;
  name?: string;
  closeMenu?: boolean;
  children?: React.ReactNode;
}

export const OptionMenu = ({
  href,
  name,
  children,
  closeMenu = true,
}: OptionMenuProps) => {
  const { theme, setIsOpen } = useGlobalContext() as Context;
  return (
    <li
      className={`text-sm font-bold px-4 py-2 mt-8 md:mt-0 md:font-bold md:text-base ${!theme ? "text-[--primary-color]" : "text-[--dark-theme]"}`}
    >
      {children}
      <a onClick={() => setIsOpen(closeMenu)} title={name} href={href}>
        {name}
      </a>
    </li>
  );
};
