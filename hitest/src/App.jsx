
import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0);

  const handleButtonClick=()=>{
    setCount((prevCount)=>prevCount+1)
  }

  function multiply(){
    return count*10
  }

  return (
   <>
   <p>Main value :{count}</p>
  <button onClick={handleButtonClick}> Click to multiply by 5</button>
     <p>Multiplied value:{multiply()}</p>

   </>
  )
}

export default App
