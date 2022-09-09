import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import "./inputs.css"

const NewSong = (props) => {

    const artistas = [
        "NPC",
        "Z4RB3",
        "M4R1",
        "J4V13R",
    ]

    const { setNewSongForm } = props;

    const [name,setName] = useState("Nombre de la canción");
    const [artist,setArtist] = useState("Artista");
    const [img,setImg] = useState(false);

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
                        <h4 className="admin__songs__new-song__form__header__info__artista">{artist}</h4>
                    </div>
                </div>

                <div className="admin__songs__new-song__form__inputs">
                    <div class="group">      
                        <input type="text" name="titulo" required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Título</label>
                    </div>
                    <div class="group">      
                        <input type="text" name="artista" list="artistas" required/>
                        <datalist id="artistas">
                            {
                                artistas.map( artista => {
                                    return(
                                        <option value={artista}/>
                                    )
                                })
                            }
                        </datalist>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Artista</label>
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