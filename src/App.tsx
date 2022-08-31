import NavBar from "./components/NavBar/NavBar.index";
import { FunctionComponent } from "react";
import Hero from "./components/Hero/Hero.index";
import Footer from "./components/Footer/Footer.index";
import Main from "./components/Main/Main.index";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Main />
            <Footer />
        </>
    );
};

export default App;
