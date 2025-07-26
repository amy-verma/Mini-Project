import { useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(100);

  const handleIncrement = () => {
    setIncrement((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setDecrement((prev) => prev - 1);
  };

  // const multiply = () => {
  //   console.log("multiply called");
  //   return increment + 10;
  // };

  const multiply = useMemo(() => {
    console.log("multiply called");
    return increment + 10;
  }, [increment]);
  return (
    <div>
      <p>{multiply}</p>
      <p>{increment}</p>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <p>{decrement}</p>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;

// import { useEffect, useMemo } from "react";
// import { useState } from "react";

// const App = () => {
//   const [increment, setIncrement] = useState(0);
//   const [decrement, setDecrement] = useState(100);

//   const handleIncrement = (e) => {
//     setIncrement((prev) => prev + 1);
//   };

//   const handleDecrement = () => {
//     setDecrement((prev) => prev - 1);
//   };

//   // function multiply() {
//   //   console.log("**");
//   //   return increment + 10;
//   // }

//   const multiply = useMemo(() => {
//     console.log("**");
//     return increment + 10;
//   }, [increment]);

//   return (
//     <>
//       <div>{multiply}</div>
//       <p>{increment}</p>
//       <button onClick={handleIncrement}>Increment</button>
//       <br />
//       <p>{decrement}</p>
//       <button onClick={handleDecrement}>Decrement</button>
//     </>
//   );
// };

// export default App;

// import { useEffect, useMemo, useState } from "react";

// import "./App.css";

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [dark, setDark] = useState(false);

//   const doubleNumber = useMemo(() => {
//     return slowfunction(number);
//   }, [number]);

//   const themeStyles = useMemo(() => {
//     return {
//       backgroundColor: dark ? "black" : "white",
//       color: dark ? "white" : "black",
//     };
//   }, [dark]);

//   useEffect(() => {
//     console.log("theme changed");
//   }, [themeStyles]);

//   return (
//     <div>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//       />
//       <button onClick={() => setDark((prevDark) => !prevDark)}>
//         Change Theme
//       </button>
//       <div style={themeStyles}>{doubleNumber}</div>
//     </div>
//   );
// };

// function slowfunction(num) {
//   console.log("calling slow function");
//   for (let i = 0; i <= 10000000; i++) {}
//   return num * 2;
// }

// export default App;
