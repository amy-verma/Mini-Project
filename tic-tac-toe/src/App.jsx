
import { useState } from 'react'
import './App.css'

function App() {
  const [board,setBoard]=useState(Array(9).fill(null))
  const [isXTurn,setXTurn]=useState(true)
  const [winner,setWinner]=useState(null)

  const renderSquare=function(index){
    
    return <div>
      <button onClick={()=>handlebuttonClick(index)} className='button'>{board[index]}</button>
    </div>
  }
  const handlebuttonClick=(index)=>{
    if(board[index]!=null){
      return ;
    }
    // console.log(index,"clicked")
    const newBoard=[...board];
    newBoard[index]=isXTurn ? "X" : "O";
    setBoard(newBoard) 
    setXTurn(!isXTurn)
    const winnerCombination=checkWinner(newBoard)
    if(winnerCombination){
      setWinner(newBoard[winnerCombination[0]])
    }
  }
  const checkWinner=(newBoard)=>{
    const combination=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for(let i=0;i<combination.length;i++){
      const [a,b,c]=combination[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c])
{
         return [a, b, c];

      }
    }
    return null
  }
  const handleReset=()=>{
    setBoard(Array(9).fill(null))
  }
  return (
    <>
      <div className='board'>
        <div className='board-row'>
        {renderSquare(0)}
         {renderSquare(1)}
         {renderSquare(2)}
        </div>
        <div className='board-row'>
        {renderSquare(3)}
         {renderSquare(4)}
         {renderSquare(5)}
        </div>
         <div className='board-row'>
        {renderSquare(6)}
         {renderSquare(7)}
         {renderSquare(8)}
        </div>

      </div>
      <div>
        <button className='reset-btn' onClick={handleReset}>Reset</button>
        {winner && <div>{winner} is winner od this game</div>}
      </div>
    </>
  )
}

export default App
