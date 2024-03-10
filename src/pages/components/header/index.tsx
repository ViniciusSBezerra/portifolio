import { HeaderDesktop } from "./header-desktop";
import { MobileHeader } from "./header-mobile";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const HeaderController = useMediaQuery({ query: "(min-width: 768px)" });
  return <header>{HeaderController ? <HeaderDesktop /> : <MobileHeader />}</header>;
};
