import { Footer } from "./pages/components/footer"
import { Homepage } from "./pages/home"
import { Header } from "./pages/components/header"
import { Context, useGlobalContext } from "./context";



export const App = () => {

    const { theme } = useGlobalContext() as Context;

    console.log(theme)
    return (
        <div className={!theme ? "app" : "app dark-theme"}>
            <div className="content">
                <Header />
                <Homepage />
                <Footer />
            </div>
        </div>
    )
}