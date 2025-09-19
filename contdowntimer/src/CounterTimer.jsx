import { useEffect, useState } from "react"

const CounterTimer=()=>{

    const [time,setTime]=useState(0)
    const [isActive,setActive]=useState(false);
    const [isPause,setPause]=useState(false)

    const handleInputTimer=(e)=>{
        setTime(parseInt(e.target.value *60))   
    }
    const formatTime=()=>{
        const min=String(Math.floor(time/60)).padStart(2,"0")
        const sec=String(time%60).padStart(2,"0")
        return `${min}:${sec}`
    }
    const handleStart=()=>{
        setActive(true)
        setPause(false)
    }
    useEffect(()=>{
        if(isActive && !isPause && time>0){
            intervalRef.current
        }
    },[])
    return (
        <>
        <h1>Counter Timer</h1>
        <div>
            <input type="number" placeholder="Enter time in minutes" onChange={handleInputTimer}/>
            <div>{formatTime()}</div>
        </div>
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button>Reset</button>
        </div>
        </>
    )
}

export default CounterTimer