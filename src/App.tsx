import { Footer } from "./pages/components/footer"
import { Homepage } from "./pages/home"
import { Header } from "./pages/components/header"
import { Context, useGlobalContext } from "./context";



export const App = () => {

    const { theme } = useGlobalContext() as Context;

    return (
        <div className={!theme ? "app" : "app dark-theme"}>
            <Header />
            <main className="content">

                <Homepage />

            </main>

            <Footer />
        </div>
    )
}