import banner from '../../assets/img/studio.jpeg';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home__banner">
                <div className='home__banner__img__container'>
                    <img src={banner} alt="banner" className="home__banner__img"></img>
                </div>
                <div className="home__banner__text">
                    <h1 className="home__banner__text__title">
                        LUCID DREAMS
                    </h1>
                    <p className="home__banner__text__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                        Donec euismod, nisl eget consectetur sagittis,<br/>
                        nisl nisi consectetur nisi, euismod eget nisl nisi<br/>
                        consectetur nisi.<br/>
                    </p>
                    <button className="home__banner__text__button"> Leer más </button>
                </div>
            </div>
        </div>
    );
}

export default Home;