import { useState } from 'react'
import './App.css'

const App=()=>{
  const [input,setInput]=useState("")
  const [task,setTask]=useState([])
  
  const handleAddButton=()=>{
    if(input.trim()==="") return
    setTask((prevTask)=>[...prevTask,input])
   setInput("")
  }

  const handleOnChange=(e)=>{
    setInput(e.target.value)
  }

  const handleDelete=(index)=>{
    setTask((prevTask)=>prevTask.filter((ele,id)=>id!==index))
  }
  return (
  <>
  <h2>To Do App</h2>
  <input type='text' placeholder='Enter to do' value={input} onChange={handleOnChange}/>
  <button onClick={handleAddButton}>Add</button>
  <div>{
    task.map((task,index)=>{
      return <li key={index}>{task} <button onClick={()=>handleDelete(index)}>Delete</button></li>
    })
    }</div>
  </>
  )
}

export default App
