import {useState} from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import TypingPlayground from "./pages/TypingPlayground";
import "./App.css";

function App(){
  const [currentPage, setCurrentPage] = useState("home");

  return(
    <div>
      <Header />
      <Navigation />
      {currentPage === "home" && (
        <Home onSelect={setCurrentPage} />
      )}

      {currentPage === "typing" && (
          <TypingPlayground />
      )}
    </div>
  );
}

export default App;