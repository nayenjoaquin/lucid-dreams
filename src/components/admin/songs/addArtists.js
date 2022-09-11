import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './inputs.css'
import './artists.css'

const AddArtists = ( props ) => {

    const { artistas , setArtists } = props;

    const [ songArtists, setSongArtists ] = useState([]);
    const [ showArtists, setShowArtists ] = useState(false);
    const [ matchedArtists, setMatchedArtists ] = useState([]);

    const handleInputChange = ( e ) => {

        const { value } = e.target;

        const aux = artistas.filter( artista => artista.toLowerCase().includes(value.toLowerCase().trim()));
        console.log(aux);
        setMatchedArtists(aux);

    }

    const addArtist = async ( e ) => {
        const { innerText } = e.target;

        const aux = [...songArtists,innerText];

        setMatchedArtists(matchedArtists.filter( artista => artista !== innerText));
        setSongArtists(aux);
        setArtists(aux);
        document.getElementById('add-artist-input').value = '';

    }

    const rmvArtist = ( e ) => {
        e.preventDefault();
        const artist = e.target.innerText;
        const aux = songArtists.filter( artista => artista !== artist );
        setSongArtists(aux);
        setArtists(aux);
        setMatchedArtists([...matchedArtists, artist].sort());
    }
    return(
        <div className='add-artistas'>
            
            {
                songArtists.length > 0
                ? <div className='add-artistas__tags'>
                    {songArtists.map( (artista,key) => {
                        return(
                            <div onMouseDown={e=>{
                                e.preventDefault();
                                e.stopPropagation();
                            }} className='add-artistas__song-artist' key={key} onClick={rmvArtist}>
                                <p className='add-artistas__song-artist__name'>{artista}</p>
                                <FontAwesomeIcon style={{pointerEvents: 'none'}} className='add-artistas__song-artist__delete-btn' icon={faXmark} />
                            </div>
                        )
                    })}
                </div>
                : null
            }

            <p className='add-artistas__title'>Seleccione los artistas que participan en la canción:</p>

            <div className="group add-artist-input">      
                <input  className="input" id="add-artist-input" autoComplete='off' type="text" name="artista" required onBlur={ e => {
                    setShowArtists(false);
                    e.currentTarget.value = "";
                }} onFocus={ async e => {
                    setMatchedArtists(artistas);
                    setShowArtists(true);
                }} onChange={handleInputChange}/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label id="artista-input-label">Artista</label>
                {
                    showArtists
                    ? <div className='add-artistas__artists'>
                        {
                            matchedArtists.length === 0
                            ?  <p className='add-artistas__artists__artist no-results'>No se encontraron artistas :c</p>
                            :   matchedArtists.map( (artista,key) => {
                                return(
                                    <p className='add-artistas__artists__artist' key={key} onMouseDown={ e => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }} onClick={addArtist}>{artista}</p>
                                )
                            })
                        }
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default AddArtists