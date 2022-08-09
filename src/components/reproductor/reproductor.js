import { useState } from 'react'
import './reproductor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward, faPause, faPlay, faAngleDown, faXmark } from '@fortawesome/free-solid-svg-icons'

const Reproductor = (props) => {
    const {title, artist} = {...props}

    const [play, setPlay] = useState(true)

    const playMusic = (e) => {
        e.stopPropagation();
        setPlay(true)
    }

    const pauseMusic = (e) => {
        e.stopPropagation();
        setPlay(false)
    }

    const nextSong = (e) => {
        e.stopPropagation();
    }
    const previousSong = (e) => {
        e.stopPropagation();
    }
    const showFullPlayer = () => {
        console.log("click en div")
        const reproductor = document.getElementById("reproductor")
        if(!reproductor.classList.contains("full"))reproductor.classList.add("full")
    }
    const hideFullPlayer = () => {
        const reproductor = document.getElementById("reproductor")
        if(reproductor.classList.contains("full"))reproductor.classList.remove("full")
    }
    const quitPlayer = (e) => {
        e.stopPropagation();
        const reproductor = document.getElementById("reproductor")
        if(!reproductor.classList.contains("hidden"))reproductor.classList.add("hidden")
    }

    const coverArt = require(`../../assets/img/${title.toUpperCase()} - ${artist.toUpperCase()}.jpg`)

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
                        <img className='reproductor__bottom__content__img' src={coverArt} alt="img"></img>
                        <div className='reproductor__bottom__content__info'>
                            <p className='reproductor__bottom__content__info__title'>{title}</p>
                            <p className='reproductor__bottom__content__info__artist'>{artist}</p>
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
                        <div className='reproductor__bottom__player__timeline'>
                            <input type="range" className='reproductor__bottom__player__timeline__slider'></input>
                            <div className='reproductor__bottom__player__timeline__labels'>
                                <p className='reproductor__bottom__player__timeline__labels__value'>0:00</p>
                                <p className='reproductor__bottom__player__timeline__labels__duration'>3:21</p>
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
