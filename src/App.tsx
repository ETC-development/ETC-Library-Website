import NavBar from "./components/NavBar/NavBar.index";
import Aside from "./components/Aside/Aside.index";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div>
      <NavBar /> 
      <Aside/>
    </div>
  );
};

export default App;
