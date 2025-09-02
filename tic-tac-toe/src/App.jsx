
import './App.css'

function App() {

  const renderSquare=function(){
    return <div>
      <button>X</button>
    </div>
  }

  return (
    <>
      <div className='board'>
        <div className='board-row'>
        {renderSquare()}
         {renderSquare()}
        </div>

      </div>
    </>
  )
}

export default App
