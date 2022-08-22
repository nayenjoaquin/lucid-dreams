import './musica.css';
import songs from './songs.js'
import SongItem from './song-item.js'

const Musica = () => {

    const shufflePlaylist = async (e) => {
        e.stopPropagation();
        console.log(e.currentTarget)
        var target = "";
        if(e.currentTarget.classList.contains("main")) return null;
        else if(e.currentTarget.classList.contains("second")) target = "second"
        else target = "third";
        
        const main = document.getElementsByClassName("main")[0]
        main.classList.remove("main")
        main.classList.add(target)
        e.currentTarget.classList.remove(target)
        e.currentTarget.classList.add("main")
    }

    return(
        <div className="musica">
            <div className='musica__playlist main' onClick={shufflePlaylist}>
                <p className='musica__playlist__title'>Últimos lanzamientos</p>
                <div className='musica__playlist__songs'>
                    {
                        songs.map( (value, index) => {
                            return <SongItem titulo={value.titulo} artista={value.artista} key={index}/>
                        } )
                    }
                </div>
            </div>
            <div className='musica__playlist second' onClick={shufflePlaylist}>
                <p className='musica__playlist__title'>Lo más escuchado</p>
                
            </div>
            <div className='musica__playlist third' onClick={shufflePlaylist}>
                <p className='musica__playlist__title'>Próximamente...</p>
                
            </div>
        </div>
    )
}

export default Musica;