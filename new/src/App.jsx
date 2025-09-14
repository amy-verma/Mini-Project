import { useEffect, useState } from "react";


const App=()=>{
  const [users,setUsers]=useState([])
  const [list,setList]=useState("")

  const fetchData=async()=>{
    const data=await fetch("https://jsonplaceholder.typicode.com/users")
    const response=await data.json()
    setUsers(response)
    console.log(response)
  }
  useEffect(()=>{
    fetchData()
  },[])

  const handleList=(e)=>{
    setList(e.target.value)
  }

const FilteredData=users.filter((ele)=>{
  return ele.name.toLowerCase().includes(list.toLowerCase())
})

  return (
  <>
  <div>
    <input type="text" placeholder="Search Here" value={list} onChange={handleList}/>
  </div>
<div>
  <ul>{
    FilteredData.map((ele,id)=>{
      return <li key={id}>{ele.name}</li>
    })
    }</ul>
</div>
  </>
  )
}
export default App;
