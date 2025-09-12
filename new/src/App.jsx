import { useState } from "react";


const INITIAL_VAlue=15;

function App() {
  const [count,setCount]=useState(INITIAL_VAlue)

  const handleIncrement=()=>{
    setCount((prevCount)=>Math.min(prevCount+1,25))
  }
  const handleDecrement=()=>{
    setCount((prevCount)=>Math.max(prevCount-1,10))
  }
  const handleReset=()=>{
    setCount(0)
  }

  let bgColor=count > 15 ? "red" :"blue"
 
  return (
   <>
   <div style={{backgroundColor:bgColor}}>
    <p>{count}</p>
   <button onClick={handleIncrement}>Increment</button>
   <button onClick={handleDecrement}>Decrement</button>
   </div>
   <div>
    <button onClick={handleReset}>Reset</button>
   </div>
   
   </>
  )
}

export default App;
