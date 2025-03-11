import { useState } from 'react'


const StatisticLine =(props)=>{
const text = props.text
const value = props.value
  return(
    <table>
      <tbody>
      <tr>
        <td> {text} </td>
        <td> {value} </td>
      </tr>
      </tbody>
    </table>

  )
}
const Statistics =(props) => {
  const {good, neutral, bad, all } =props
  return(
    <div>
      
      
      <p style={{fontSize:20,fontWeight:'bold'}}>statistics</p> 
          
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={all} />

     <table>
     <tbody>
     <tr><td>
      average {all>0 ? ((good+(bad*-1))/all):0}
      </td></tr>
      
      <tr><td>
      positive {all >0 ? (good/all)*100 : 0} %
      </td></tr>
     </tbody>
      </table> 
    
    
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
      <p style={{fontSize:20,fontWeight:'bold'}}>give feedback</p>
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