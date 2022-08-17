import Hero from "./components/Hero/Hero.index";
import Main from "./components/Main/Main.index";
import Footer from "./components/Footer/Footer.index";

interface AppProps {
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div>
      <Hero />
      <Main />
      <Footer/>
    </div>
  );
};

export default App;