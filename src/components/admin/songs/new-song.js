import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import AddArtists from "./addArtists";
import "./inputs.css"
import artistas from "./artistas";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";
import { postSong } from "../../../services/admin";
import md5 from "md5";
import imageCompression from 'browser-image-compression';

const NewSong = (props) => {

    const { setNewSongForm, toast } = props;

    const [name,setName] = useState("Nombre de la canción");
    const [artists,setArtists] = useState([]);
    const [img,setImg] = useState(null);
    const [song,setSong] = useState(null);

    const compressionOptions = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1000,
        useWebWorker: true
    }

    const uploadImg = async (releaseId, imgFile) => {
        if(imgFile==null) return;
        const fileName = `image.${imgFile.name.split('.').pop()}`;

        const storageRef = ref(storage, `${releaseId}/${fileName}`);
        await uploadBytes(storageRef, imgFile)
        const url = await getDownloadURL(storageRef);
        return url;
    }

    const uploadSong = async (releaseId) => {
        if(song==null) return;
        const fileName = `audio.${song.name.split('.').pop()}`;
        const storageRef = ref(storage, `${releaseId}/${fileName}`);
        await uploadBytes(storageRef, song)
        const url = await getDownloadURL(storageRef);
        return url;

    }

    const uploadFiles = (e) =>{
        e.preventDefault();

        const releaseName = name + artists.join(" X ");
        const releaseId = md5(releaseName);

        toast.promise(new Promise(async (resolve) => {

            const compressedImg = await imageCompression(img, compressionOptions);
            const imgURL = await uploadImg(releaseId,compressedImg);
            const songURL = await uploadSong(releaseId);
            

            const data = {
                titulo: name,
                artista: artists,
                date: new Date(),
                id: releaseId,
                audio: songURL,
                img: imgURL,
                youtube: "",
                spotify: "",
            }

            console.log(data);

            postSong(data).then(() => {
                resolve();
            })

        
        }), {
            pending: 'Subiendo archivos',
            success: 'Canción subida',
            error: 'Error al subir la canción',
        })
        setNewSongForm(false);
    }


    const closeForm = (e) => {
        e.stopPropagation();
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si cierras el formulario perderás los datos que hayas escrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si, salir',
            cancelButtonText: 'Continuar',
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
                            console.log(e.target.files[0].duration);
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
                    <button className="admin__songs__new-song__form__buttons__save-btn" onClick={uploadFiles}>Guardar</button>
                </div>
            </form>
        </div>
    )
}

export default NewSong