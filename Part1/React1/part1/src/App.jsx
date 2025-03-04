
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
      {/* <p>{Dataparts [props.id].name } {Dataparts [props.id].exercises }</p>     */}
      <p>{Dataparts.name } {Dataparts.exercises }</p>  
   </div>
  )
}

const Content = (props)=>{
     
  return(
    
    <div>
      <p>PARTES</p>
      
      <Part data= {props.p1}/>
      <Part data= {props.p2}/>
      <Part data= {props.p3}/>
    </div>
  )
}
const Total = (props)=>{
  
  return(
    <div>
    <p> Total = {props.p1.exercises+props.p2.exercises+props.p3.exercises}</p>
  </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }



  return (
    <div>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={ part3}/>
      <Total  p1={part1} p2={part2} p3={ part3} />
    </div>

    
  )
}

export default App