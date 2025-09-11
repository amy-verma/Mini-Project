import React,{useState} from "react";


const INITIAL_VALUE=15

function App() {
const [count,setCount]=useState(INITIAL_VALUE)
     
  const handleIncrement=()=>{
        setCount((prev)=>Math.min(prev+1,25) )
  }
     const handleDecrement=()=>{
        setCount((prev)=>Math.max(prev-1,10))
  }
  const handleResetButton=()=>{
    setCount(0)
  }

  let bgColor=count>15? "green" : "red"
 
  return (
   <>
   <div style={{backgroundColor:bgColor}}>
     
       <p>{count}</p>
    <button onClick={handleIncrement}>Increment</button> 
    
     
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
