import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"
import AddArtists from "./addArtists";
import "./inputs.css"
import artistas from "./artistas";
import { storage } from "../../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import Compressor from "compressorjs";
import Swal from "sweetalert2";

const NewSong = (props) => {

    const { setNewSongForm, toast } = props;

    const [name,setName] = useState("Nombre de la canción");
    const [artists,setArtists] = useState([]);
    const [img,setImg] = useState(null);
    const [song,setSong] = useState(null);
    const [releaseTitle, setReleaseTitle] = useState("");

    const uploadImg = (resolve) => {
        if(img==null) return;
        const fileName = `${releaseTitle}.${img.name.split('.').pop()}`;
        new Compressor(img, {
            quality: 0.6,
            success(result) {
                const storageRef = ref(storage, `images/${fileName}`);
                uploadBytes(storageRef, result).then((snapshot) => {
                    resolve();
                });
            },
            error(err) {
                console.log(err.message);
            },
        });
    }

    const uploadSong = (resolve) => {
        if(song==null) return;
        const fileName = `${releaseTitle}.${song.name.split('.').pop()}`;
        const storageRef = ref(storage, `songs/${fileName}`);
        uploadBytes(storageRef, song).then((snapshot) => {
            resolve();
        });
    }

    const uploadFiles = new Promise(async (resolve,reject) => {
        new Promise((resolve,reject) => {
            uploadImg(resolve);
        }
        ).then(() => {
            uploadSong(resolve);
        }
        )
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setReleaseTitle(name + " - " + artists.join(" x "))
        
    }

    useEffect(() => {
        if(releaseTitle == (name + " - " + artists.join(" x ")) && releaseTitle != "") {
            toast.promise(uploadFiles, {
                pending: "Subiendo canción...",
                success: "Canción subida correctamente",
                error: "Error al subir la canción",
            });
            setNewSongForm(false);
        }
    },[releaseTitle])

    const closeForm = (e) => {
        e.stopPropagation();
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si cierras el formulario perderás los datos que hayas escrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cerrar',
            cancelButtonText: 'Cancelar',
            }).then((result) => {
            if (result.isConfirmed) {
                setNewSongForm(false);
            }
        }
        )
    }
    return(
        <div className="admin__songs__new-song" onClick={closeForm}>
            <form className="admin__songs__new-song__form" onClick={ e => {
                e.stopPropagation();
            }}>
                <div className="admin__songs__new-song__form__header">
                    <div className="admin__songs__new-song__form__header__img-container">
                        {
                            img
                            ? <img src={URL.createObjectURL(img)} alt="Song cover" className="admin__songs__new-song__form__header__img-container__img"/>
                            : <button className="admin__songs__new-song__form__header__img-container__add-img-btn" onClick={ e => {
                                e.stopPropagation();
                                e.preventDefault();
                            }}>
                                <FontAwesomeIcon icon={faMusic}/>
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
                        <input onChange={ async e => {
                            setSong(e.target.files[0]);
                        }} className="new-song__file-input" type="file" name="song-file" accept=".mp3, .wav" required/>
                    </div>
                    <div>
                        <p className="new-song__file-input__title">Seleccione la imagen:</p>
                        <input onChange={ async e => {
                            setImg(e.target.files[0]);
                        }} className="new-song__file-input" type="file" name="img-file" accept=".jpg, .jpeg, .png" required/>
                    </div>
                </div>

                <div className="admin__songs__new-song__form__buttons">
                    <button className="admin__songs__new-song__form__buttons__cancel-btn" onClick={ e => {
                        e.preventDefault();
                        closeForm(e);
                    }}>Cancelar</button>
                    <button className="admin__songs__new-song__form__buttons__save-btn" onClick={handleSubmit}>Guardar</button>
                </div>
            </form>
        </div>
    )
}

export default NewSong