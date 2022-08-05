import { useState } from 'react'
import './reproductor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

const Reproductor = (props) => {
    const {title, artist} = {...props}

    const [play, setPlay] = useState(true)

    const playMusic = () => {
        setPlay(true)
    }

    const pauseMusic = () => {
        setPlay(false)
    }

    const coverArt = require(`../../assets/img/${title.toUpperCase()} - ${artist.toUpperCase()}.jpg`)

    return(
        <div className="player">
            <div className='reproductor'>
                <div className='reproductor__full'>
                    <div className='reproductor__full__img'></div>
                    <div className='reproductor__full__info'>
                        <div className='reproductor__full__info__title'>{title}</div>
                        <div className='reproductor__full__info__artist'>{artist}</div>
                    </div>
                </div>
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
                            <button className='reproductor__bottom__player__buttons__next'>
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
                            <button className='reproductor__bottom__player__buttons__next'>
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
                </div>
            </div>
        </div>
    )
}

export default Reproductor;
