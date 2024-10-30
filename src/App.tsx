import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Property From Env : {import.meta.env.VITE_KEY || "Empty"}</p>
    </>
  );
}

export default App;
