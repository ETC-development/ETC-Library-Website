import Hero from "./components/Hero/Hero.index";

interface AppProps {
  
}
 
const App: React.FunctionComponent<AppProps> = () => {
  return ( 
    <div>
      <Hero/>
    </div>
   );
}
 
export default App;