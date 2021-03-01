import './App.scss';
import React, {useState} from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [darkMode, setDarkMode] = useState("dark");

  return (
    <div className={"App " + darkMode}>
      <Header />

      <Main />
      
      <footer className="Footer">
        <button onClick={() => setDarkMode(darkMode === "light" ? "dark" : "light")}>
          Click
        </button>
      </footer>
    </div>
  );
}

export default App;