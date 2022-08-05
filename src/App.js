import './index.css';
import NavBar from './components/navbar/navbar.js';
import Home from './components/home/home.js';
import PromoBar from './components/promobar/promobar';
import Artistas from './components/artistas/artistas';
import Contacto from './components/contacto/contacto';
import Musica from './components/musica/musica';
import Reproductor from './components/reproductor/reproductor';

function App() {
  return (
    <div className="App">
      <PromoBar/>
      <NavBar/>
      <Reproductor title="Cuento de hadas" artist="NPC x thekmind"/>
      <Home/>
      <Musica/>
      <Artistas/>
      <Contacto/>
    </div>
  );
}

export default App;
