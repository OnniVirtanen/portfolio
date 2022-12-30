import "../Styles/footer.css";
import github_logo from "../Images/GitHub_Logo_White.png";
import linkedin_logo from "../Images/LI-Logo.png";
import { Link } from 'react-scroll'


const Footer = () => {
    var Scroll = require('react-scroll');
    var scroll = Scroll.animateScroll;
  
    return(
        <div className='footer'>
            <div className='container'>
                <Link onClick={() => scroll.scrollToTop()}><h2>Onni.</h2></Link>
                <div className='copyright'>© Onni Virtanen</div>
                <a target="_blank" rel="noreferrer" href="https://github.com/OnniVirtanen"><img className="github-logo" src={github_logo} alt="github-logo" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/onni-virtanen-63566b254/"><img src={linkedin_logo} alt="linkedin-logo"/></a>
            </div>
        </div>    
    )
}

export default Footer;