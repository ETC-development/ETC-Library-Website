
import NavBar from "components/NavBar/NavBar.index";
import Footer from "./components/Footer/Footer.index";


interface AppProps {
  
}

 
const App: React.FunctionComponent<AppProps> = () => {
  return ( 
    <div>
      <NavBar />
      {/* <Footer/> */}
    </div>
   );
}
 
export default App;
