import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";


const SongItem = (props) => {

    const { song, setActiveSong } = {...props}
    const [songFile , setSongFile] = useState(null)
    const [imgUrl , setImgUrl] = useState(null)
    const [songUrl , setSongUrl] = useState(null)

    useEffect(() => {
        fetchSong( song )
    }, [song])

    const fetchSong = (song) => {
        let imgRef = ref(storage, `images/${song.img}`);
        getDownloadURL(imgRef).then((url) => {
            console.log(url)
            setImgUrl(url)
        }).catch((error) => {
            console.log(error)
        })
        
        let songRef = ref(storage, `songs/${song.song}`);
        getDownloadURL(songRef).then((url) => {
            console.log(url)
            setSongUrl(url)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        if(songUrl != null){
            setSongFile(new Audio(songUrl))
        }
    }, [songUrl])
    
    const playSong = (e) => {
        e.stopPropagation();
        if(songFile !== null){
            setActiveSong(songFile)
        }
        const player = document.getElementById("reproductor")
        if(player.classList.contains("hidden")) player.classList.remove("hidden")
    }


    return(
        <div className="song-item" onClick={playSong}>
            <div className="song-item__start">
                <img className="song-item__img" src={imgUrl} alt="img"></img>
                <div className="song-item__info">
                    <p className="song-item__info__title">{song.titulo}</p>
                    <p className="song-item__info__artist">{song.artista.join(" x ")}</p>
                </div>
            </div>
            <div className="song-item__end">
                <p className="song-item__duration">3:14</p>
                <FontAwesomeIcon className="song-item__options" icon={faEllipsis} onClick={e => {
                    e.stopPropagation()
                }}></FontAwesomeIcon>
            </div>    
        </div>
    )

}

export default SongItem;