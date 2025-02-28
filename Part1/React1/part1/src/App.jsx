
const Header = (props)=>{
  return(
    <div>
      <p>Nombre del curso = {props.course} </p>
    </div>
  )
}

const Part =(props)=>{
  const Dataparts = props.data
  return(
    <div>
      <p>{Dataparts [props.id].part } {Dataparts [props.id].exercises }</p>  
   </div>
  )
}

const Content = (props)=>{
    

  return(
    
    <div>
      <p>PARTES</p>
      <Part id={0} data= {props.data}/>
      <Part id={1} data= {props.data}/>
      <Part id={2} data= {props.data}/>
    </div>
  )
}
const Total = (props)=>{
  console.log(props.data[0])
  return(
    <div>
      <p> Total = {props.data[0].exercises+props.data[1].exercises+props.data[2].exercises}</p>
  </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const cont =[
    {part: 'Fundamentals of React', exercises:10 },
    {part: 'Using props to pass data', exercises:7 },
    {part: 'State of a component', exercises:14 }
  ]



  return (
    <div>
      <Header course={course} />
      <Content data= {cont}/>
      <Total  data= {cont} />
    </div>

    
  )
}

export default App