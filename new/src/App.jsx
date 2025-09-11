import React,{useState} from "react";

function App() {
const [count,setCount]=useState(0)
     
  const handleIncrement=()=>{
        setCount((prev)=>prev+1)
  }
     const handleDecrement=()=>{
        setCount((prev)=>prev-1)
  }
  const handleResetButton=()=>{
    setCount(0)
  }
 
  return (
   <>
     <div>
       <p>{count}</p>
    <button onClick={handleIncrement}>Increment</button> 
     </div>
     <div>
         <p>{count}</p>
       <button onClick={handleDecrement}>Decrement</button>
     </div>
     <div>
      <button onClick={handleResetButton}>Reset</button>
     </div>
     
   </>
  )
}

export default App;
