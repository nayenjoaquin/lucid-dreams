import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import CarrouselItem from './carrousel-item';
import artistas from '../../data/artistas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const Carrousel = (props) => {

    const [position, setPosition] = useState(0);

    const carrouselWidth = artistas.length * 220 - 20

    const handleNext = () => {
        const aux= position - 440;
        setPosition(aux);
        moveCarrousel(aux);
    }

    const handlePrev = () => {
        const aux= position + 440;
        setPosition(aux);
        moveCarrousel(aux);
    }

    const moveCarrousel = (aux) => {
        document.getElementsByClassName('artistas__inner-carrousel')[0].style.transform = `translateX(${aux}px)`;
    }

    return(
        <motion.div className="artistas__carrousel" whileTap={{cursor: "grabbing"}}>
            <motion.div  className='artistas__inner-carrousel'>
                {artistas.map((artist, index) => {
                    return <CarrouselItem artist={artist} key={index}></CarrouselItem>
                })}
            </motion.div>
            <div className='artistas__carrousel__icon__container'>
                {position < 0
                    ? <button className='artistas__carrousel__icon' onClick={handlePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    : <button className='artistas__carrousel__icon hidden' onClick={handlePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                }
                {position >= carrouselWidth*-1 + 440
                    ? <button className='artistas__carrousel__icon' onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    : <button className='artistas__carrousel__icon hidden' onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                }
            </div>
        </motion.div>
    )
}

export default Carrousel;