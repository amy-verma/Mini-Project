import { useEffect, useState } from 'react';
import './App.css'

const App=()=>{

  const [users,setUsers]=useState([])
  const [search,setSearch]=useState("")

  const FetchData=async()=>{
    try{
      const data=await fetch("https://jsonplaceholder.typicode.com/users")
      const response=await data.json()
      console.log(response)
      setUsers(response)
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    FetchData()
  },[])
  const handleInputChnage=(e)=>{
    setSearch(e.target.value)
  }

  const filteredData=users.filter((ele)=>{
    return ele.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (<>
  <div><input type='text' placeholder='Search Here' value={search}  onChange={handleInputChnage}/></div>
  <div><ul>
    {filteredData.map((ele)=>{
    return <li key={ele.id}>{ele.name}</li>
  })}</ul></div>
  </>)
}

export default App
