import { useEffect, useState } from 'react';
import './App.css'

const App=()=>{

  const [users,setUsers]=useState([])

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

  return (<>
  <div><ul>
    {users.map((ele)=>{
    return <li key={ele.id}>{ele.name}</li>
  })}</ul></div>
  </>)
}

export default App
