import SongItem from './song-item'
import './musica.css'

const LastReleases = (props) => {

    const { onClickFunction } = {...props}

    return(
        <div className="musica__playlist main" onClick={onClickFunction}>
            <p className="musica__playlist__title">Últimos lanzamientos</p>
            <div className="musica__playlist__songs">
                <SongItem titulo="Canción 1" artista="Artista 1"/>
                <SongItem titulo="Canción 2" artista="Artista 2"/>
                <SongItem titulo="Canción 3" artista="Artista 3"/>
                <SongItem titulo="Canción 4" artista="Artista 4"/>
                <SongItem titulo="Canción 5" artista="Artista 5"/>
                <SongItem titulo="Canción 6" artista="Artista 6"/>
            </div>
        </div>
    )
}

export default LastReleases