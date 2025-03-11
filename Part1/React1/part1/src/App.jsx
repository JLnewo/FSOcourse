import { useState } from 'react'

const Statistics =(props) => {
  const good =props.good
  const neutral= props.neutral
  const bad = props.bad
  const all = props.all
  return(
    <div>
      <text style={{fontSize:20,fontWeight:'bold'}}>statistics</text>
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    <p>all {all}</p>
    <p>average {all>0 ? ((good+(bad*-1))/all):0}</p>
    <p>positive {all >0 ? (good/all)*100 : 0} %</p>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll]= useState(0)


    const handleGood =()=>{

      setGood (good+1)
      setAll(all+1)
    }
    const handleNeutral =()=>{
      setNeutral(neutral+1)
      setAll(all+1)
    }
    const handleBad =()=>{
      const updateBad=bad+1
      setBad(bad+1)
      setAll(all+1)
    }
  

  return (
    <div>
      <text style={{fontSize:20,fontWeight:'bold'}}>give feedback</text>
      <p></p>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <p></p>
      {all> 0 ? <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    : "No feedback given"}
    </div>
  )
}

export default App