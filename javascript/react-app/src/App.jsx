import './App.css'
import Categories from './Categories'
import Header from './Header'
import Letter from './Letter'

function App() {
  const categories = [
    {"id":1,"libelle":"Test 1"},
    {"id":2,"libelle":"Test 2"},
  ]
  return (
    <>
      <Header></Header>
      <Categories categories={categories}></Categories>
      <Letter bgcolor="#58B3FF">
        <div>Hello</div>
      </Letter>
      <Letter bgcolor="#FF605F">E</Letter>
      <Letter bgcolor="#FFD52E">I</Letter>
      <Letter bgcolor="#49DD8E">O</Letter>
      <Letter bgcolor="#AE99FF">U</Letter>
    </>
  )
}
export default App
