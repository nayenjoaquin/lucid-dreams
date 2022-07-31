import './index.css';
import NavBar from './components/navbar/navbar.js';
import Home from './components/home/home.js';
import PromoBar from './components/promobar/promobar';
import Artistas from './components/artistas/artistas';

function App() {
  return (
    <div className="App">
      <PromoBar/>
      <NavBar/>
      <Home></Home>
      <Artistas/>
    </div>
  );
}

export default App;
