import { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types'


Name.propTypes = {
    name : PropTypes.string,
    onNameChange: PropTypes.func
}
FavoriteAnimal.propTypes = {
    animal : PropTypes.string,
    onNameChange: PropTypes.func
}
Display.propTypes = {
    name : PropTypes.string,
    animal: PropTypes.string
}
function Name(props) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" type="text" value={props.name} onChange={props.onNameChange} />
    </div>
  )
}
function FavoriteAnimal(props){
  return(
    <div>
       <label htmlFor="animal">Animal: </label>
      <input id="animal" type="text" value={props.animal} onChange={props.onNameChange} />
    </div>
  )
}
function Display(props){
  return (
    <div>
      Your name is {props.name} and your favorite animal is {props.animal}
    </div>
  )
}
Person.propTypes = {
    person : PropTypes.object,
    onNameChangeName:PropTypes.func,
    onNameChangeAge:PropTypes.func
}
function Person(props){
    return (
      <div>
        Your name is {props.person.name} and your favorite animal is {props.person.age}
      
       <label htmlFor="name">Name: </label>
       <input id="name" type="text" value={props.person.name} onChange={props.onNameChangeName} />
       <label htmlFor="name">Age: </label>
       <input id="name" type="number" value={props.person.age} onChange={props.onNameChangeAge} />
     </div>
    )
  }
const AppComParentToChild = ()=>{
  const [name, setName] = useState('')
  const [animal, setAnimal] = useState('')
  const [person,setPerson] = useState({name:'',age:0})
  return (
    <>
      <Name name={name} onNameChange={event => setName(event.target.value)}/>
      <FavoriteAnimal animal={animal} onNameChange={event => setAnimal(event.target.value)}/>
      <Display name={name} animal={animal}/>
      <Person person={person} 
        onNameChangeName={event => setPerson({ ...person, name: event.target.value })}
        onNameChangeAge={event => setPerson({ ...person,  age: event.target.value })}
      />
    </>
  )
}
export default AppComParentToChild