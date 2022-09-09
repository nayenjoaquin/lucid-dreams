import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./songs.css";
import { useState } from "react";
import NewSong from "./new-song";


const FilterBar = ( props ) => {

    const { setNewSongForm } = props;

    return(
        <div className="admin__songs__filterbar">
            <button className="admin__songs__filterbar__add-song-btn" onClick={ e => {
                e.stopPropagation();
                setNewSongForm(true);
            }}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    )
}

const Songs = () => {

    const [newSongForm, setNewSongForm] = useState(false);
    
    return(
        <>
            <div className="admin__songs admin__subpage">
                <FilterBar setNewSongForm={setNewSongForm}/>
                <div className="admin__songs__list"></div>
            </div>
            {
                newSongForm ? <NewSong setNewSongForm={setNewSongForm}/> : null
            }
        </>
    )
}

export default Songs