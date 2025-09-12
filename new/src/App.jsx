import { useEffect, useState } from "react";


function App() {
  const [users,setUsers]=useState([])
  const [search,setSearch]=useState("")
  const [list,setList]=useState([])


  const FetchData=async()=>{
    try{
      const data=await fetch("https://jsonplaceholder.typicode.com/users")
      const response=await data.json();
      console.log(response);
      setUsers(response)
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    FetchData()
  },[])

  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }

  const FilteredData=users.filter((ele,id)=>{
    return ele.name.toLowerCase().includes(search.toLowerCase())
  })
 return (
  <>
  <div>
    <input type="text" placeholder="Search Here" value={search} onChange={handleSearch}/>
  </div>
  <div>
    <ul>
      {
        FilteredData.map((ele,id)=>{
          return <li key={id}>{ele.name}</li>
        })
      }
    </ul>
  </div>
  </>
 )
}

export default App;
