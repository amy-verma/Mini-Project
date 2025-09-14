import { useEffect, useState } from "react";
import useCustomHook from "./customHook";


const App=()=>{
  
  const [count,handleIncrement,handleDecrement]=useCustomHook()
  return (<>
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  
  </>)
}
export default App;
