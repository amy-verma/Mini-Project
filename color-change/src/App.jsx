import { useState } from "react";
import "./App.css";

const LIMIT = 16;

function App() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(20);
  const handleAdd = () => {
    setAdd((prevInc) => prevInc + 1);
  };
  const handleSub = () => {
    setSub((prevSub) => prevSub - 1);
  };
  return (
    <>
      <div className="button-container">
        <div className="counter-box">
          <p style={{ color: add === LIMIT ? "red" : "green" }}>{add}</p>
          <button
            style={{ backgroundColor: add === LIMIT ? "green" : "yellow" }}
            onClick={handleAdd}
            disabled={add === 16}
          >
            Add
          </button>
        </div>
        <div className="counter-box">
          <p style={{ color: sub === LIMIT ? "red" : "green" }}>{sub}</p>
          <button
            style={{ backgroundColor: sub === LIMIT ? "green" : "yellow" }}
            onClick={handleSub}
            disabled={sub === 16}
          >
            Subtract
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
