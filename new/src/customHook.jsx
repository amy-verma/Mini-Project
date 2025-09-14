import { useState } from "react"

const useCustomHook=()=>{

    const [count,setCount]=useState(0)

  const handleIncrement=()=>{
    setCount((prevCount)=>prevCount+1)

  }
  const handleDecrement=()=>{
    setCount((prevCount)=>prevCount-1)
  }


    return [count,handleIncrement,handleDecrement]
}

export default useCustomHook