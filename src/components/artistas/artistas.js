import './artistas.css'
import Carrousel from './carrousel';

const Artistas = (props) => {
    return(
        <div className="artistas">
            <h3 className='artistas__title'>CONOCE A NUESTROS ARTISTAS</h3>
            <Carrousel></Carrousel>
        </div>
    ) 
}

export default Artistas;