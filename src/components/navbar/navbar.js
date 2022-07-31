import './navbar.css';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {
    return (
        <nav className="navbar">
            <div className='navbar__logo' onClick={ e => {
                e.preventDefault();
                window.scroll({
                    top: 0,
                    behavior: "smooth"
                });
            }}>
                <p className='navbar__logo__lucid'>LUCID</p>
                <p className='navbar__logo__dreams'>DREAMS</p>
            </div>
                <ul className='navbar__menu'>
                    <li className='navbar__menu__item'>
                        <a href='/' className='navbar__menu__item__link'> Inicio </a>
                    </li>
                    <li className='navbar__menu__item'>
                        <a href='/' className='navbar__menu__item__link'> Artistas </a>
                    </li>
                    <li className='navbar__menu__item'>
                        <a href='/' className='navbar__menu__item__link'> Contacto </a>
                    </li>
                    <li className='navbar__menu__item'>
                        <a href='/' className='navbar__menu__item__link'> Acerca </a>
                    </li>
                    <li className='navbar__menu__icon'>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </li>
                </ul>
        </nav>
    );
}

export default NavBar;