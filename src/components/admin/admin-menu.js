import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const AdminMenu = (props) => {

    const {activePage} = {...props}

    const navigate = useNavigate()

    const pages = [
        {name: 'Panel', path: '/admin/dashboard'},
        {name: 'Canciones', path: '/admin/songs'},
        {name: 'Artistas', path: '/admin/artists'},
    ]

    return(
        <>
        <div className='admin__mobile__menu'>
            <ul>
                { pages.map((page, index) => {
                    let className = 'admin__mobile__menu__page'
                    if("/admin/" + activePage === page.path) className += ' activePage'
                    return(
                        <li className={className} key={index} onClick={() => navigate(page.path)}>
                            <h5>{page.name}</h5>
                        </li>
                    )
                })}
            </ul>
        </div>
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
        </>
    )
}

export default AdminMenu