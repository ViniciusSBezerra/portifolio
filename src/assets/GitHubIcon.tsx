import { Context, useGlobalContext } from "../context";

export const GitHubIcon = () => {

  const { theme } = useGlobalContext() as Context
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 0C8.95 0 0 8.72335 0 19.4821C0 28.0915 5.73 35.3923 13.675 37.9664C14.675 38.1498 15.0417 37.5467 15.0417 37.0296C15.0417 36.567 15.025 35.3411 15.0167 33.7171C9.45333 34.8917 8.28 31.1034 8.28 31.1034C7.37 28.8548 6.055 28.2534 6.055 28.2534C4.24333 27.0457 6.195 27.0705 6.195 27.0705C8.20333 27.2059 9.25833 29.0778 9.25833 29.0778C11.0417 32.0567 13.94 31.1959 15.0833 30.6986C15.2633 29.438 15.7783 28.5805 16.35 28.0931C11.9083 27.6058 7.24 25.9305 7.24 18.4661C7.24 16.3398 8.015 14.6017 9.29833 13.2387C9.07333 12.7463 8.39833 10.7654 9.47333 8.08231C9.47333 8.08231 11.1483 7.56023 14.9733 10.0798C16.5733 9.6469 18.2733 9.43212 19.9733 9.42221C21.6733 9.43212 23.3733 9.6469 24.9733 10.0798C28.7733 7.56023 30.4483 8.08231 30.4483 8.08231C31.5233 10.7654 30.8483 12.7463 30.6483 13.2387C31.9233 14.6017 32.6983 16.3398 32.6983 18.4661C32.6983 25.9503 28.0233 27.5975 23.5733 28.0766C24.2733 28.6615 24.9233 29.856 24.9233 31.6816C24.9233 34.2887 24.8983 36.3836 24.8983 37.0164C24.8983 37.5269 25.2483 38.1366 26.2733 37.9416C34.275 35.3841 40 28.0783 40 19.4821C40 8.72335 31.045 0 20 0Z"
        fill={!theme ? "#445964" : "#17add4"}
      />
    </svg>
  );
};
