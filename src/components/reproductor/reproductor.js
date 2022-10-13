import { useState } from 'react'
import './reproductor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward, faPause, faPlay, faAngleDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { setSong } from '../../features/songs/playingSong'
import { useEffect } from 'react'


const Reproductor = () => {

    const [play, setPlay] = useState(true)
    const [audio, setAudio] = useState(null)
    const [currentTime, setCurrentTime] = useState("0:00")
    const song = useSelector(state => state.song)
    const dispatch = useDispatch()

    useEffect(() => {
        if (song) {
            if (audio) {
                audio.pause()
            }
            setAudio(new Audio(song.audio))
            document.getElementById("reproductor").classList.remove("hidden")
        } 
        // eslint-disable-next-line
    }, [song])
    
    useEffect(() => {
        if (audio) {
            playMusic()
            audio.addEventListener("timeupdate", updateTime)
        }
        // eslint-disable-next-line
    }, [audio])

    const updateTime = () => {
        setCurrentTime(secondsToMinutes(Math.ceil(audio.currentTime)))
        
    }

    useEffect(() => {

        if (audio) {
            const slider = document.getElementById("song-slider")
            slider.value = audio.currentTime
            slider.style.background = `linear-gradient(to right, #ffaf36 0%, #ffaf36 ${slider.value / audio.duration * 100}%, #ccc ${slider.value / audio.duration * 100}%, #ccc 100%)`
        }
        // eslint-disable-next-line
    }, [currentTime])

    const secondsToMinutes = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secondsLeft = seconds % 60
        return `${minutes}:${secondsLeft < 10 ? "0" + secondsLeft : secondsLeft}`
    }

    const playMusic = (e=null) => {
        if (e) e.stopPropagation();
        audio.play()
        setPlay(true)
    }

    const pauseMusic = (e) => {
        e.stopPropagation();
        audio.pause()
        setPlay(false)
    }

    const nextSong = (e) => {
        e.stopPropagation();
    }
    const previousSong = (e) => {
        e.stopPropagation();
    }
    const showFullPlayer = () => {
        const reproductor = document.getElementById("reproductor")
        if(!reproductor.classList.contains("full"))reproductor.classList.add("full")
    }
    const hideFullPlayer = () => {
        const reproductor = document.getElementById("reproductor")
        if(reproductor.classList.contains("full"))reproductor.classList.remove("full")
    }
    const quitPlayer = (e) => {
        e.stopPropagation();
        pauseMusic(e)
        setAudio(null)
        dispatch(setSong(null))
        const reproductor = document.getElementById("reproductor")
        if(!reproductor.classList.contains("hidden"))reproductor.classList.add("hidden")
    }

    return(
        <div className="player">
            <div id='reproductor' className='reproductor hidden' onClick={e => {
                e.preventDefault();
                showFullPlayer()
            }}>
                <button className='reproductor__minimize-btn' onClick={e => {
                    e.stopPropagation();
                    hideFullPlayer();
                }}><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></button>
                <div className='reproductor__bottom'>
                    <div className='reproductor__bottom__content'>
                        <img className='reproductor__bottom__content__img' src={song ? song.img : null} alt="img"></img>
                        <div className='reproductor__bottom__content__info'>
                            <p className='reproductor__bottom__content__info__title'>{song ? song.name : null}</p>
                            <p className='reproductor__bottom__content__info__artist'>{song ? song.artist.join(" X ") : null}</p>
                        </div>
                    </div>
                    <div className='reproductor__bottom__player'>
                        <div className='reproductor__bottom__player__buttons'>
                            <button className='reproductor__bottom__player__buttons__next' onClick={previousSong}>
                                <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>
                            </button>
                            {   play
                                ? <button className='reproductor__bottom__player__buttons__play' onClick={pauseMusic}>
                                    <FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
                                </button>
                                : <button className='reproductor__bottom__player__buttons__play' onClick={playMusic}>
                                    <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                                </button>
                            }
                            <button className='reproductor__bottom__player__buttons__next' onClick={nextSong}>
                                <FontAwesomeIcon icon={faForward}></FontAwesomeIcon>
                            </button>
                        </div>
                        <div className='reproductor__bottom__player__timeline' onClick={e => e.stopPropagation()}>
                            <input id="song-slider" onChange={e => {
                                    e.stopPropagation();
                                    audio.currentTime = e.target.value
                                }
                            } min={0} max={audio!== null ? Math.ceil(audio.duration) : "100"} type="range" className='reproductor__bottom__player__timeline__slider'></input>
                            <div className='reproductor__bottom__player__timeline__labels'>
                                <p className='reproductor__bottom__player__timeline__labels__value'>{currentTime}</p>
                                <p className='reproductor__bottom__player__timeline__labels__duration'>{song ? song.duration : "0:00"}</p>
                            </div>
                        </div>
                    </div>
                    <button className='reproductor__bottom__quit-btn' onClick={quitPlayer}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    )
}

export default Reproductor;
