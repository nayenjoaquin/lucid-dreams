import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const FilterBar = () => {
    return(
        <div className="admin__songs__filterbar">
            <button className="admin__songs__filterbar__add-song-btn">
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    )
}

const Songs = () => {
    
    return(
        <div className="admin__songs admin__subpage">
            <FilterBar/>
            <div className="admin__songs__list"></div>
        </div>
    )
}

export default Songs