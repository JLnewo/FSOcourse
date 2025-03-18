import { useState} from 'react'
import Name from './componets/Name'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
      id : 1
    }
  ]) 
  const [newName, setNewName] = useState('')
  
  const Addname = (event)=>{
    event.preventDefault()
    const nameObj ={
      name : newName,
      id : persons.length + 1    
    }
   duplicate(nameObj)
    }
    

  const handleNoteChange = (event) => {    
    setNewName(event.target.value)
  }
  const duplicate = (data)=>{
    if (!persons.some(e=>e.name === data.name)){
      setPersons(persons.concat(data))
      setNewName('')
    } else {
      alert(data.name + ' is already added to phonebook')
      setNewName('')
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={Addname}>
      
        <div>
          name: 
          <input
          value={newName}
          onChange={handleNoteChange}
        />
        </div>
      
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(e =>
         <Name key={e.id} persons={e}/>
           
        )}
      </ul>
      </div>
      
  )
}

export default App