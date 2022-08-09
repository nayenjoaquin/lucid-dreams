import './musica.css';
import songs from './songs.js'
import SongItem from './song-item.js'

const Musica = () => {

    return(
        <div className="musica">
            <div className='musica__last-releases'>
                <p className='musica__last-releases__title'>Últimos lanzamientos</p>
                <div className='musica__last-releases__songs'>
                    {
                        songs.map( (value, index) => {
                            return <SongItem titulo={value.titulo} artista={value.artista} key={index}/>
                        } )
                    }
                </div>
            </div>
            <div className='musica__most-listened'>
                <p className='musica__most-listened__title'>Lo más escuchado</p>
            </div>
            <div className='musica__coming-soon'>
                <p className='musica__coming-soon__title'>Próximamente...</p>
            </div>
        </div>
    )
}

export default Musica;