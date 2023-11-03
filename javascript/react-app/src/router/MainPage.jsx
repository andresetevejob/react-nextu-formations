import { Routes, Route } from 'react-router-dom';
import {Categories} from './Categories'
import {Home} from './Home'
import {About} from './About'
const MainPage = ()=>{
 return (
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
     </Routes>
 )
}
export default MainPage