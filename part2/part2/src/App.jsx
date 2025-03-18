import { useState} from 'react'
import Name from './componets/Name'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
      number : "040-1234567",
      id : 1,

    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const Addname = (event)=>{
    event.preventDefault()
    const nameObj ={
      name : newName,
      number: newNumber,
      id : persons.length + 1    
    }
    !newName.trim() || !newNumber.trim() ?  alert("Por favor, completa ambos campos antes de agregar."): duplicate(nameObj) ;
    }
    

  const handleNoteChange = (event) => {    
    setNewName(event.target.value)
  }
  const handleNumChange = (event) => {    
    setNewNumber(event.target.value)
  }

  const duplicate = (data)=>{
    if (!persons.some(e=>e.name === data.name && e.number === data.number)){
      setPersons(persons.concat(data))
      setNewName('')
      setNewNumber('')
    } else {
      alert(data.name + ' is already added to phonebook')
      setNewName('')
      setNewNumber('')
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
        <div>number: 
          <input
          value={newNumber}
          onChange={handleNumChange}
        /></div>
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