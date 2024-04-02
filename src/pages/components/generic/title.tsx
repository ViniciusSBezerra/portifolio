import { useGlobalContext, Context } from "../../../context"

interface Tag {
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string

}
interface TitleProps {
    title: string
    tag: Tag
}

export const Title = ({ title }: TitleProps) => {
    const { theme } = useGlobalContext() as Context
    return (

        < p className={`text-3xl font-bold   ${!theme ? "text-[--primary-color]" : "dark-theme"}`
        }>  {title}</p >
    )
}