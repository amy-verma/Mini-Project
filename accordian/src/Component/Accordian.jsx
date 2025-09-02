import { useState } from "react"
import "../App.css"

const Accordian=({qna})=>{
    const [show,setShow]=useState(false)
   const handleClick=()=>{
    setShow(!show)
   }
   
    return (
     <div className="accordian"> 
       
        <h2>{qna.question} <span onClick={handleClick}>{show ? "-" : "+"}</span></h2>
       {show ?  <p>{qna.answer}</p> : ""}
    </div>)
}

export default Accordian;