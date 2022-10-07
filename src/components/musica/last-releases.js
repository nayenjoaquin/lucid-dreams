import SongItem from './song-item'
import './musica.css'
import { listSongs } from '../../services/client'
import { useEffect, useState } from 'react'

const LastReleases = (props) => {

    const { onClickFunction, setActiveSong } = {...props}

    const [songs, setSongs] = useState([])

    useEffect(() => {
        listSongs().then((songsList) => {
            setSongs(songsList)
        })
    }, [])

    return(
        <div className="musica__playlist main" onClick={onClickFunction}>
            <p className="musica__playlist__title">Últimos lanzamientos</p>
            <div className="musica__playlist__songs">
                {songs.map((song,key) => {
                    return <SongItem key={key} song={song} setActiveSong={setActiveSong}/>
                })}
            </div>
        </div>
    )
}

export default LastReleases