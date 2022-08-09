const SongItem = (props) => {

    const { titulo, artista } = {...props}

    const playSong = (e) => {
        const player = document.getElementById("reproductor")
        if(player.classList.contains("hidden")) player.classList.remove("hidden")
    }

    const coverArt = require(`../../assets/img/${titulo.toUpperCase()} - ${artista.toUpperCase()}.jpg`)
    return(
        <div className="song-item" onClick={playSong}>
            <img className="song-item__img" src={coverArt} alt="img"></img>
            <div className="song-item__info">
                <p className="song-item__info__title">{titulo}</p>
                <p className="song-item__info__artist">{artista}</p>
            </div>
            
        </div>
    )

}

export default SongItem;