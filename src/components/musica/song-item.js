import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
const SongItem = (props) => {

    const { titulo, artista } = {...props}

    const playSong = (e) => {
        const player = document.getElementById("reproductor")
        if(player.classList.contains("hidden")) player.classList.remove("hidden")
    }

    let coverArt = null
    try {
        coverArt = require(`../../assets/img/${titulo.toUpperCase()} - ${artista.toUpperCase()}.jpg`)
    }
    catch {
        coverArt = require(`../../assets/img/DEFAULT.jpg`)
    }
    return(
        <div className="song-item" onClick={playSong}>
            <div className="song-item__start">
                <img className="song-item__img" src={coverArt} alt="img"></img>
                <div className="song-item__info">
                    <p className="song-item__info__title">{titulo}</p>
                    <p className="song-item__info__artist">{artista}</p>
                </div>
            </div>
            <div className="song-item__end">
                <p className="song-item__duration">3:14</p>
                <FontAwesomeIcon className="song-item__options" icon={faEllipsis}></FontAwesomeIcon>
            </div>    
        </div>
    )

}

export default SongItem;