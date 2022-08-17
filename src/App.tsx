import Hero from "./components/Hero/Hero.index";
import Main from "./components/Main/Main.index";

interface AppProps {
}

const App: React.FunctionComponent<AppProps> = () => {
    return (
        <div>
            <Hero/>
            <Main/>
        </div>
    );
}

export default App;