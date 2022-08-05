import './musica.css';
import songs from './songs.js'
import SongItem from './song-item.js'

const Musica = () => {

    return(
        <div className="musica">
            <div className='musica__last-releases'>
                <p className='musica__last-releases__title'>Nuestros últimos lanzamientos:</p>
                <ul className='musica__last-releases__list'>
                    {
                        songs.map( (value, index) => {
                            return <SongItem titulo={value.titulo} artista={value.artista} key={index}/>
                        } )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Musica;