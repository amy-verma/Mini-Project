import { useEffect, useRef, useState } from "react"

const CounterTimer=()=>{

    const [time,setTime]=useState(0)
    const [isActive,setActive]=useState(false);
    const [isPause,setPause]=useState(false)

    const intervalRef=useRef()

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
            intervalRef.current=setInterval(()=>{
                setTime((prev)=>prev-1)
            },1000)
        }else if(time===0){
            clearInterval(intervalRef.current);
            setActive(false)
            alert("TIME IS UP")
        }
        return ()=>clearInterval(intervalRef.current)
    },[isActive,isPause])

    const handlePause=()=>{
        setPause(!isPause)
    }
    const handleReset=()=>{
        clearInterval(intervalRef.current)
        setActive(false)
        setPause(false)
        setTime(0)
    }
    return (
        <>
        <h1>Counter Timer</h1>
        <div>
            <input type="number" placeholder="Enter time in minutes" onChange={handleInputTimer}/>
            <div>{formatTime()}</div>
        </div>
        <div>
            <button onClick={handleStart} disabled={isActive && !isPause}>Start</button>
            <button onClick={handlePause} disabled={!isActive}>{isPause ? "Resume" : "Pause"}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        </>
    )
}

export default CounterTimer