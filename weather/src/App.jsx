
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [city,setCity]=useState("")
  const [weather,setWeather]=useState([])


  const handleInputCity=(e)=>{
    setCity(e.target.value)
  }
  const FetchData=async()=>{
    const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64023c35d30f794f9bdcf02845fedb91
`)
    const response=await data.json();
    console.log(response)
    setWeather(response)
    setCity("")

  }

  const handlebuttonSearchClick=()=>{
    FetchData()
    
  }
  return (
    <>
    <div>
       <input type='text' placeholder='Enter City' value={city} onChange={handleInputCity}/>
    <button onClick={handlebuttonSearchClick}>Search</button>
    </div>
    <div>
      <ul>
        {
          weather && <>
          <h3>{weather.name}</h3>
          <p>Temprature is {weather?.main?.temp}</p>
          <p>{weather.weather[0]?.description}</p>
          </>
          }
        
      </ul>
    </div>
   
      </>
  )
}

export default App
