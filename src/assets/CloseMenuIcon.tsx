import { Context, useGlobalContext } from "../context";

export const CloseMenuIcon = () => {
  const { theme } = useGlobalContext() as Context;

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.4731 33.4731L66 66"
        stroke={!theme ? "black" : "#17add4"}
        stroke-width="5"
        stroke-linecap="round"
      />
      <path
        d="M66 33.4731L33.4731 66"
        stroke={!theme ? "black" : "#17add4"}
        stroke-width="5"
        stroke-linecap="round"
      />
    </svg>
  );
};
