import { Logo } from "../../../assets/Logo"

const Loading = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center gap-3">

            <Logo /> <p className={"text-2xl text-[--primary-color] font-bold"}>Vinicius Tech</p>
        </div>
    )

}

export default Loading