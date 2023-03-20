import { useState } from "react";
import logo from "./assets/logo_lang.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <img src={logo} alt="Felix Hoffmann" />
      </div>
      <h1>Felix Hoffmann</h1>
      <p>This site is in development. This can take some time.</p>
      <div className="card">
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
