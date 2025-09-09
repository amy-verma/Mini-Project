
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [user,setUser]=useState([]);
  
  const Fetchdata=async()=>{
    const data=await fetch("https://jsonplaceholder.typicode.com/users");
    const response=await data.json()
    console.log(response)
    setUser(response)

  }
  
  useEffect(()=>{
    Fetchdata()
  },[])

  return (
    <>
    <div>
      <ul>
        {
          user.map((ele)=>{
            return <li key={ele.id}>{ele.name}</li>
          })
        }
      </ul>
    </div>
      
    </>
  )
}

export default App
