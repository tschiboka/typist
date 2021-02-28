import './App.scss';
import React, {useState} from "react";

function App() {
  const [darkMode, setDarkMode] = useState("dark");

  return (
    <div className={"App " + darkMode}>
      HERE
      <button onClick={() => setDarkMode(darkMode === "light" ? "dark" : "light")}>Click</button>
    </div>
  );
}

export default App;
