import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import logo_negro from '../../assets/img/logo-negro.png'

const NavBar = (props) => {

    const showMenu = (e) =>{
        e.preventDefault()
        const menu = document.getElementById('navbar__menu')
        const back = document.getElementById('blurry-background')
        menu.style.right = '0px';
        back.style.display = 'block';
    }

    const closeMenu = (e) =>{   
        e.preventDefault()
        const menu = document.getElementById('navbar__menu')
        const back = document.getElementById('blurry-background')
        menu.style.right = '-250px';
        back.style.display = 'none';
    }

    const showDesktopInput = (e) =>{
        e.preventDefault()
        const input = document.getElementById('desktop-search-input')
        input.style.width = '200px';
        input.style.marginLeft = '20px';
        const background = document.getElementById('input-active-background')
        background.style.display = 'block';
        input.focus();
    }

    const showMobileInput = (e) =>{
        e.preventDefault()
        const input = document.getElementById('mobile-search-input')
        input.style.width = '120px';
        input.style.marginLeft = '20px';
        const background = document.getElementById('input-active-background')
        background.style.display = 'block';
        input.focus();
    }
        

    const closeSearchInput = (e) =>{
        e.preventDefault()
        const desktopInput = document.getElementById('desktop-search-input')
        desktopInput.style.width = '0px';
        desktopInput.style.marginLeft = '0px';
        const mobileInput = document.getElementById('mobile-search-input')
        mobileInput.style.width = '0px';
        mobileInput.style.marginLeft = '0px';
        const background = document.getElementById('input-active-background')
        background.style.display = 'none';
    }

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
            <div id='blurry-background' className='blurry-background' onClick={closeMenu}></div>
            <div id='input-active-background' className='input-active-background' onClick={closeSearchInput}></div>
            <div className='navbar__icon-container'>
                <div className='search-bar navbar__icon' onClick={showMobileInput}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <input id='mobile-search-input' type="text" placeholder="Buscar..." className='search-bar__input'/>
                </div>
                <FontAwesomeIcon icon={faBars} className='navbar__icon' onClick={showMenu}/>
            </div>
            <ul id='navbar__menu' className='navbar__menu'>
                <img src={logo_negro} className='logo-mobile' alt='logo-mobile'></img>
                <li className='navbar__menu__item'>
                    <a href='/' className='navbar__menu__item__link' onClick={ e => {
                        e.preventDefault();
                        window.scroll({
                            top: 0,
                            behavior: "smooth"
                        });
                    }}> Inicio </a>
                </li>
                <li className='navbar__menu__item'>
                    <a href='/' className='navbar__menu__item__link' onClick={ e => {
                        e.preventDefault();
                        window.scroll({
                            top: window.innerHeight-80
                        });
                    }}> Artistas </a>
                </li>
                <li className='navbar__menu__item'>
                    <a href='/' className='navbar__menu__item__link' onClick={ e => {
                        e.preventDefault();
                        window.scroll({
                            top: window.innerHeight*2 - 80
                        });
                    }}> Contacto </a>
                </li>
                <li className='navbar__menu__item'>
                    <a href='/' className='navbar__menu__item__link'> Tienda </a>
                </li>
                <div id='input-active-background' className='input-active-background' onClick={closeSearchInput}></div>
                <li id='desktop-search-icon' className='search-bar-desktop' onClick={showDesktopInput}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <input id='desktop-search-input' type="text" placeholder="Buscar..." className='search-bar__input'/>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;