import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./songs.css";
import { useState } from "react";
import NewSong from "./new-song";
import { useEffect } from "react";
import { listSongs } from "../../../services/client";


const FilterBar = ( props ) => {

    const { setNewSongForm } = props;

    const [songsList, setSongsList] = useState([]);

    useEffect(() => {
        listSongs().then((songs) => {
            setSongsList(songs);
        });
    }, []);

    useEffect(() => {
        console.log(songsList);
    }, [songsList]);

    return(
        <div className="admin__songs__filterbar">
            <div className="admin__songs__filterbar__search-bar">
                <FontAwesomeIcon icon={faSearch} className="admin__songs__filterbar__search-bar__icon"/>
                <input type="text" placeholder="Search" name="song-search" className="admin__songs__filterbar__search-bar__input"/>
            </div>

            <button className="admin__songs__filterbar__add-song-btn" onClick={ e => {
                e.stopPropagation();
                setNewSongForm(true);
            }}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    )
}

const Songs = (props) => {

    const { toast } = props;

    const [newSongForm, setNewSongForm] = useState(false);
    
    return(
        <>
            <div className="admin__songs admin__subpage">
                <FilterBar setNewSongForm={setNewSongForm}/>
                <div className="admin__songs__list"></div>

            </div>

            {  // NEW SONG FORM VIEW
                newSongForm ? <NewSong setNewSongForm={setNewSongForm} toast={toast}/> : null
            }
        </>
    )
}

export default Songs