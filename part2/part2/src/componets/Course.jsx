

const Header =({name})=>{
 return(
    <h1>
        {name}
    </h1>
 )

}
const Content =({parts})=>{
 return(
    <ul>
    {parts.map(part => 
      <Part key={part.id} part={part}/>
    )}
 </ul>

 )
}
const Part =({part})=>{
return(
    <p>{part.name} {part.exercises}</p>

)
}

const Total =({parts})=>{
   

    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
    
    return(
       <ul>Total : {total}</ul>

    )
}

const Course =({course})=>{
    const name = course.name
    const parts = course.parts
    return(
        <div>
            <Header name={name}/>
            <Content parts={parts}/>
            <Total parts={parts}/>
        </div>
        
    )

}

export default Course 