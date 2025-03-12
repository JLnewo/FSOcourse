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


const Course =({course})=>{
    const name = course.name
    const parts = course.parts
    return(
        <div>
            <Header name={name}/>
            <Content parts={parts}/>
        </div>
        
    )

}

export default Course 