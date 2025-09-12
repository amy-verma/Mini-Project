import { useState } from "react";


function App() {
  const [search,setSearch]=useState("");
  const [list,setList]=useState([])

  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }
  const handleAdd=()=>{
    if(search.trim()===""){
      return
    }
    setList((prev)=>[...prev,search])
    console.log(list)
    setSearch("")
  }
  const handleRemove=(index)=>{
    setList((prevList)=>prevList.filter((ele,id)=>id!=index))
  }
  return(
    <>
    <h2>ToDo App</h2>
    <input type="text" placeholder="Add To Do" value={search} onChange={handleSearch}/>
    <button onClick={handleAdd}>Add</button>
    <ul>{
       list.map((ele,index)=>{
        return <li key={index}>{ele} <button onClick={()=>handleRemove(index)}>Remove</button></li>
      })
      }
     
    </ul>
    </>
  )
 
}

export default App;
