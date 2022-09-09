import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTableColumns } from '@fortawesome/free-solid-svg-icons'

const AdminMenu = (props) => {

    const {activePage} = {...props}

    const navigate = useNavigate()

    const pages = [
        {name: 'Dashboard', path: '/admin/dashboard', icon: faTableColumns},
        {name: 'Songs', path: '/admin/songs'},
        {name: 'Artists', path: '/admin/artists'},
        {name: 'Playlists', path: '/admin/playlists'},
    ]

    return(
        <div className="admin__menu">
            <ul>
                {pages.map((page, index) => {
                    let className = 'admin__menu__page'
                    if("/admin/" + activePage === page.path) className += ' activePage'
                    return(
                        <li key={index} className={className} onClick={e => {
                            navigate(page.path)
                        }}>
                            <h5 className='admin__menu__page__link'>{page.name}</h5>
                            <FontAwesomeIcon className='admin__menu__page__icon' icon={faChevronDown} onClick={e => {
                                e.stopPropagation()
                            }}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default AdminMenu