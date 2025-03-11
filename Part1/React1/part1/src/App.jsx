import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


    const handleGood =()=>{

      const updateGood =good+1
      setGood (updateGood)
      
    }
    const handleNeutral =()=>{
      const updateNeutral = neutral+1
      setNeutral(updateNeutral)
      
    }
    const handleBad =()=>{
      const updateBad=bad+1
      setBad(updateBad)
      
    }
  return (
    <div>
      <text style={{fontSize:20,fontWeight:'bold'}}>give feedback</text>
      <p></p>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <p></p>
      <text style={{fontSize:20,fontWeight:'bold'}}>statistics</text>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    
    </div>
  )
}

export default App