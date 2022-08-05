const SongItem = (props) => {

    const { titulo, artista } = {...props}

    const coverArt = require(`../../assets/img/${titulo.toUpperCase()} - ${artista.toUpperCase()}.jpg`)
    return(
        <div className="musica__last-releases__list__song">
            <img className="musica__last-releases__list__song__img" src={coverArt} alt="img"></img>
            <div className="musica__last-releases__list__song__info">
                <p className="musica__last-releases__list__song__info__title">{titulo}</p>
                <p className="musica__last-releases__list__song__info__artist">{artista}</p>
            </div>
            
        </div>
    )

}

export default SongItem;