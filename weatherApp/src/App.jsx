import { useState } from 'react'

import './App.css'

function App() {
  const [city, setCity] = useState("")

  const handleWeatherClick=(e)=>{
    setCity(e.target.value)
    // console.log(e.target.value);
  }

  const fetchWeather=async()=>{
    try{
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6a79c766b5cc4b7b26dac2aa15779b3e`);
      const data=await response.json();
      console.log(data)

    }catch{

    }
  }

  const handleButtonClick=()=>{
    fetchWeather()
  }

  return (
    <>
      <div>
        <input type='text' placeholder='Enter City Name' value={city} onChange={handleWeatherClick}/>
        <button onClick={handleButtonClick}>Check weather</button>
      </div>
    </>
  )
}

export default App
