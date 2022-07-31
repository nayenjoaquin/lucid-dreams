import banner from '../../assets/img/studio.jpeg';
import './home.css';

const Home = () => {
    return (
        <div id='home' className="home">
            <div className="home__banner">
                <div className='home__banner__img__container'>
                    <img src={banner} alt="banner" className="home__banner__img"></img>
                </div>
                <div className="home__banner__text">
                    <h1 className="home__banner__text__title">
                        LUCID DREAMS
                    </h1>
                    <p className="home__banner__text__description">
                        Formado en 2020, Lucid Dreams (LD) es un sello discográfico integrado por artistas,
                        productores, diseñadores, etc. Que trabajan juntos creando música apoyandose
                        mutuamente en proyectos tanto grupales como individuales.<br/>LD le da la
                        oportunidad a la gente de desarrollar su talento y alcanzar su máximo potencial en su
                        trabajo.
                    </p>
                    <button className="home__banner__text__button" onClick={ e => {
                        e.preventDefault();
                        window.scroll({
                            top: window.innerHeight-80
                        });
                    }}> Saber más </button>
                </div>
            </div>
        </div>
    );
}

export default Home;