import { useState } from 'react';
import './App.css';

function Name(props:{name:string, onNameChange:(event: React.ChangeEvent<HTMLInputElement>) => void}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" type="text" value={props.name} onChange={props.onNameChange} />
    </div>
  )
}
function FavoriteAnimal(props:{animal:string,onNameChange:(event: React.ChangeEvent<HTMLInputElement>)=>void}){
  return(
    <div>
       <label htmlFor="animal">Animal: </label>
      <input id="animal" type="text" value={props.animal} onChange={props.   onNameChange} />
    </div>
  )
}
function Display(props:{name:string,animal:string}){
  return (
    <div>
      Your name is {props.name} and your favorite animal is {props.animal}
    </div>
  )
}
const App = ()=>{
  const [name, setName] = useState('')
  const [animal, setAnimal] = useState('')
  return (
    <>
      <Name name={name} onNameChange={event => setName(event.target.value)}/>
      <FavoriteAnimal animal={animal} onNameChange={event => setAnimal(event.target.value)}/>
      <Display name={name} animal={animal}/>
    </>
  )
}
export default App;