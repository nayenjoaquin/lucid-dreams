import './musica.css';
import LastReleases from './last-releases';

const Musica = (props) => {

    const {setActiveSong} = {...props}

    const shufflePlaylist = async (e) => {
        e.stopPropagation();
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
            <LastReleases onClickFunction={shufflePlaylist} setActiveSong={setActiveSong}/>
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