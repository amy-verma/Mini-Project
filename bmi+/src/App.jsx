import { useState } from "react";

import "./App.css";

function App() {
  const [weight, setweight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  // const [Submit, setSubmit] = useState(0);
  // const [reset, setReset] = useState(0);

  const handleweight = (e) => {
    setweight(e.target.value);
  };
  const handleheight = (e) => {
    setHeight(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please Enter valid weight and Height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are fit");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  const handleReload = () => {};

  return (
    <>
      <form>
        <div>
          <label>Weight</label>
          <input
            type="number"
            placeholder="Enter weight value"
            value={weight}
            onChange={handleweight}
          />
        </div>
        <div>
          <label>Height</label>
          <input
            type="number"
            placeholder="Enter height value"
            value={height}
            onChange={handleheight}
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button type="submit" onClick={handleReload}>
            Reload
          </button>
        </div>

        <p>Your BMI is : {bmi} </p>
        <p>{message}</p>
      </form>
    </>
  );
}

export default App;
