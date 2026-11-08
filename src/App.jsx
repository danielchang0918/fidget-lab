import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import "./App.css";

function App(){
  return(
    <div>
      <Header />
      <Navigation />
      <Home />
    </div>
  );
}

export default App;