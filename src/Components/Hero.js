import "../Styles/hero.css";
import "../Styles/container.css";
import image from "../Images/onnin_kuva_new.png";
import 'animate.css';
import { Link } from 'react-scroll'

const Hero = () => {
    return (    
    <div className='hero'>
        <div className="ellipse"></div>
        <div className='container'>
            <div className='hero-text'>
                <h1 className="animate__animated animate__rubberBand">Onni Virtanen</h1>
                <p className="animate__animated animate__fadeIn">
                As a software engineering student from Jyväskylä, I am seeking job opportunities to grow professionally and am committed to continuous learning in the field.
                </p>
                <Link className='hero-button' to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
            </div>
            <img src={image} alt="Onni Virtanen" className='image-of-onni'/>
        </div>
    </div>
    )
}

export default Hero;