
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
      <p>{Dataparts[props.id].name } {Dataparts[props.id].exercises }</p>  
   </div>
  )
}

const Content = (props)=>{
     
  return(
    
    <div>
      <p>PARTES</p>
      
      <Part id= {0} data= {props.p1}/>
      <Part id= {1} data= {props.p1}/>
      <Part id= {2} data= {props.p1}/>
    </div>
  )
}
const Total = (props)=>{
  
  return(
    <div>
  <p> Total = {props.p1[0].exercises+props.p1[0].exercises+props.p1[0].exercises}</p>
  </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>
      <Header course={course.name} />
      <Content p1={course.parts} />
      <Total  p1={course.parts} />
    </div>

    
  )
}

export default App