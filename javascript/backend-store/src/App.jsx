import Header from './components/Header';
import Nav from './components/Nav';
import { Categories } from './pages/Categories';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <Nav/>
          <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/categories" element={<Categories/>}/>
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};
export default App;
