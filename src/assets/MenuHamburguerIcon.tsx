import { Context, useGlobalContext } from "../context";

export const MenuHamburguerIcon = () => {

  const { theme } = useGlobalContext() as Context
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M73 66L27 66"
        stroke={!theme ? "black" : "#17add4"}
        stroke-width="5"
        stroke-linecap="round"
      />
      <path
        d="M73 50L27 50"
        stroke={!theme ? "black" : "#17add4"}
        stroke-width="5"
        stroke-linecap="round"
      />
      <path
        d="M73 34L27 34"
        stroke={!theme ? "black" : "#17add4"}
        stroke-width="5"
        stroke-linecap="round"
      />
    </svg>
  );
};
