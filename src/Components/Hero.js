import "../Styles/hero.css";
import "../Styles/container.css";
import image from "../Images/onnin_kuva_new.png";

const Hero = () => {
    return (    
    <div className='hero'>
        <div className='container'>
            <div className='hero-text'>
                <h1>Onni Virtanen</h1>
                <p>
                As a software engineering student from Jyväskylä, I am seeking job opportunities to grow professionally and am committed to continuous learning in the field.
                </p>
                <a className='hero-button' href='#contact'>Contact me</a>
            </div>
            <img src={image} alt="Onni Virtanen" className='image-of-onni'/>
        </div>
    </div>
    )
}

export default Hero;