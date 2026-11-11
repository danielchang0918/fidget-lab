import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import TypingPlayground from "./pages/TypingPlayground";
import "./App.css";

function App() {
    const [currentPage, setCurrentPage] = useState("home");

    return (
        <div>
            {currentPage === "home" ? (
                <>
                    <Header />
                    <Navigation />
                    <Home onSelect={setCurrentPage} />
                </>
            ) : (
                <div className="typing-page">
                    <TypingPlayground />
                    <div className="typing-overlay">
                        <Header />
                        <Navigation />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;