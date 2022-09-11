import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import AddArtists from "./addArtists";
import "./inputs.css"

const NewSong = (props) => {

    const artistas = [
        "NPC",
        "SANTI",
        "Z4RB3",
        "M4R1",
        "J4V13R",
        "andres",
        "luis",
        "jose",
        "juan",
        "pedro",
        "maria",
        "josefa",
        "javier",
    ]

    const { setNewSongForm } = props;

    const [name,setName] = useState("Nombre de la canción");
    const [artists,setArtists] = useState([]);
    // const [img,setImg] = useState(false);
    const img = false;

    return(
        <div className="admin__songs__new-song" onClick={ e => {
            e.stopPropagation();
            setNewSongForm(false);
        }}>
            <form className="admin__songs__new-song__form" onClick={ e => {
                e.stopPropagation();
            }}>
                <div className="admin__songs__new-song__form__header">
                    <div className="admin__songs__new-song__form__header__img-container">
                        {
                            img
                            ? null
                            : <button className="admin__songs__new-song__form__header__img-container__add-img-btn" onClick={ e => {
                                e.stopPropagation();
                                e.preventDefault();
                            }}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        }
                    </div>
                    <div className="admin__songs__new-song__form__header__info">
                        <h3 className="admin__songs__new-song__form__header__info__nombre">{name}</h3>
                        <h4 className="admin__songs__new-song__form__header__info__artista">{
                            artists.length > 0
                            ? artists.join(' x ')
                            : "Artista"
                        }</h4>
                    </div>
                </div>

                <div className="admin__songs__new-song__form__inputs">
                    <div className="group">      
                        <input className="input" type="text" name="titulo" required onChange={ e => {
                            if(e.target.value.length > 0){
                                setName(e.target.value);
                            }else{
                                setName("Nombre de la canción");
                            }
                        }}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Título</label>
                    </div>
                    <AddArtists artistas={artistas.sort()} setArtists={setArtists}></AddArtists>
                    <div>
                        <p className="new-song__file-input__title">Seleccione el audio:</p>
                        <input className="new-song__file-input" type="file" name="song-file" accept=".mp3, .wav" required/>
                    </div>
                    <div>
                        <p className="new-song__file-input__title">Seleccione la imagen:</p>
                        <input className="new-song__file-input" type="file" name="img-file" accept=".jpg, .jpeg, .png" required/>
                    </div>
                </div>

                <div className="admin__songs__new-song__form__buttons">
                    <button className="admin__songs__new-song__form__buttons__cancel-btn" onClick={ e => {
                        e.stopPropagation();
                        e.preventDefault();
                        setNewSongForm(false);
                    }}>Cancelar</button>
                    <button className="admin__songs__new-song__form__buttons__save-btn" onClick={ e => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}>Guardar</button>
                </div>
            </form>
        </div>
    )
}

export default NewSong