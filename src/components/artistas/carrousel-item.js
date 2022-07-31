import {motion} from 'framer-motion'

const CarrouselItem = (props) => {
    const {artist} = props;

    return(
        <motion.div className="artistas__carrousel__item" initial={{x: -100}} animate={{x: 0}}>
            <div className='artistas__carrousel__card'>
                {artist}
            </div>
            <div className='artistas__carrousel__card'>
                {artist}
            </div>
        </motion.div>
        
    )
}

export default CarrouselItem;