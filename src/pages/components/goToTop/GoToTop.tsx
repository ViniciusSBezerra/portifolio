import { Context, useGlobalContext } from "../../../context";

const UpArrow = () => {
    const { theme } = useGlobalContext() as Context
    return (
        <svg
            className="mt-1"
            xmlns="http://www.w3.org/2000/svg"
            height={24}
            width={24}
            viewBox="0 0 24 24"
            fill={`${!theme ? "#fff" : "#17add4"}`}
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <path d="M12 4.83L6.41 10.41 7.83 11.83 12 7.66 16.17 11.83 17.59 10.41 12 4.83z" />
        </svg>
    );
}

export const GoToTop = () => {

    const { theme } = useGlobalContext() as Context
    return (
        <a aria-label="go to top" className={`w-10 absolute right-4 h-10 rounded-3xl  shadow-inner cursor-pointer flex justify-center items-center transition ${!theme ? "bg-[--primary-color]" : "bg-[--bg-card-dt]"}`} href="#header"><UpArrow /></a>
    )
}