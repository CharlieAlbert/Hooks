/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

/* Components */
import Timeout from "./Components/timeout";
import Countdown from "./Components/Countdown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Countdown />
      </div>
    </>
  );
}

export default App;
