import { useEffect, useState } from "react";


const App=()=>{
  const [inputValue,setInputValue]=useState("")
  const [list,setList]=useState([])

  const handleOnChangeInput=(e)=>{
   
    setInputValue(e.target.value)
  }
  const handleAddButton=()=>{
     if(inputValue.trim()==""){
      return 
    }
    setList((prev)=>[...prev,inputValue])
    setInputValue("")
  }
  const handleRemove=(index)=>{
    const update=list.filter((ele,id)=>id!=index)
    setList(update)
  }
  return ( 
  <>
  <h2>ToDo App</h2>
  <div>
    <input type="text" placeholder="Add" value={inputValue} onChange={handleOnChangeInput} />
    <button onClick={handleAddButton}>Add</button>
  </div>
  <div>
    <ul>
      {
        list.map((ele,index)=>{
          return <li key={ele.index}>{ele} <button onClick={()=>handleRemove(index)}>Remove</button></li>
        })
      }
    </ul>
  </div>
  </>
  )
}
export default App;
