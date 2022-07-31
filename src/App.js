import './index.css';
import NavBar from './components/navbar/navbar.js';
import Home from './components/home/home.js';
import PromoBar from './components/promobar/promobar';
import Artistas from './components/artistas/artistas';
import Contacto from './components/contacto/contacto';

function App() {
  return (
    <div className="App">
      <PromoBar/>
      <NavBar/>
      <Home/>
      <Artistas/>
      <Contacto/>
    </div>
  );
}

export default App;
