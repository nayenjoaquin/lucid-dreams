import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux"
import { setSong } from "../../features/songs/playingSong"
import { useEffect, useState } from "react"

const SongItem = (props) => {

    const { song } = {...props}

    const [duration, setDuration] = useState(null)

    useEffect(() => {
        if (song) {
            const audio = new Audio(song.audio)
            audio.addEventListener("loadedmetadata", () => {
                setDuration(secondsToMinutes(Math.ceil(audio.duration)))
            })
        }
    }, [song])

    const secondsToMinutes = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secondsLeft = seconds % 60
        return `${minutes}:${secondsLeft < 10 ? "0" + secondsLeft : secondsLeft}`
    }


    const dispatch = useDispatch()

    const playSong = (e) => {
        e.stopPropagation();
        const data = {
            name: song.titulo,
            artist: song.artista,
            img: song.img,
            audio: song.audio,
            id: song.id,
            duration: duration
        }

        dispatch(setSong(data))
    }


    return(
        <div className="song-item" onClick={playSong}>
            <div className="song-item__start">
                <img className="song-item__img" src={song.img} alt="img"></img>
                <div className="song-item__info">
                    <p className="song-item__info__title">{song.titulo}</p>
                    <p className="song-item__info__artist">{song.artista.join(" X ")}</p>
                </div>
            </div>
            <div className="song-item__end">
                <p className="song-item__duration">{duration ? duration : "0:00"}</p>
                <FontAwesomeIcon className="song-item__options" icon={faEllipsis} onClick={e => {
                    e.stopPropagation()
                }}></FontAwesomeIcon>
            </div>    
        </div>
    )

}

export default SongItem;