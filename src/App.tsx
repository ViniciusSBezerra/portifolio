import { Footer } from "./pages/components/footer"
import { Homepage } from "./pages/home"
import { Header } from "./pages/components/header"
import { Context, useGlobalContext } from "./context";



export const App = () => {

    const { theme } = useGlobalContext() as Context;

    return (
        <div className={!theme ? "app" : "app dark-theme"}>
            <Header />
            <main className="m-w-[1440px] px-4 mx-auto">

                <Homepage />

            </main>

            <Footer />
        </div>
    )
}