import './index.css';
import NavBar from './components/navbar/navbar.js';
import Home from './components/home/home.js';
import Musica from './components/musica/musica';
import Reproductor from './components/reproductor/reproductor';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/admin/admin';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={
          <>
            <Reproductor title="Cuento de hadas" artist="NPC x thekmind"/>
            <Home/>
            <Musica/>
          </>
        }/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin/:page' element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
